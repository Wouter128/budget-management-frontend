import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {

  errorMessages: string [] = [];

  getValidationError(formGroup: FormGroup): string [] {
    this.errorMessages = [];
    const name = formGroup.get('name');
    const description = formGroup.get('description');

    if (name?.dirty && name.hasError('required')) {
      this.errorMessages.push('Name is required');
    }

    if (name?.dirty && name.hasError('maxlength')) {
      this.errorMessages.push('Name is too long');
    }

    if (description?.dirty && description.hasError('maxlength')) {
      this.errorMessages.push('Description is too long')
    }

    return this.errorMessages;
  }
}
