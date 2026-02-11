import {Money} from './money';

export interface Transaction {
  id: string;
  date: string;
  amount: Money;
  description: string;
  categoryId: string;
  type: string;
}
