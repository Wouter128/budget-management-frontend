import {Money} from './money';

export interface Category {
  name: string;
  description: string;
  monthlyLimit: Money;
}
