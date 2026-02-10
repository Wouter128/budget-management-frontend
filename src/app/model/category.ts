import {Money} from './money';

export interface Category {
  id: string;
  name: string;
  description: string;
  monthlyLimit: Money;
}
