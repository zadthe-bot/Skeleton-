import { Product } from '../types';
import { groceriesBatch1 } from './groceries1';
import { groceriesBatch2 } from './groceries2';

export const GROCERY_PRODUCTS: Product[] = [...groceriesBatch1, ...groceriesBatch2];

