import {Money} from './money';
import {Category} from './category';

export interface Transaction {
  id: string;
  date: string;
  amount: Money;
  description: string;
  category: Category;
  type: string;
}
