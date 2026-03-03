import {Category} from './category';

export interface Transaction {
  id: string;
  date: string;
  description: string;
  category: Category;
  type: string;
}
