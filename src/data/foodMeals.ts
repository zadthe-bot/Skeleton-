import { Product } from '../types';
import { foodMealsBatch1 } from './foodMeals1';
import { foodMealsBatch2 } from './foodMeals2';

export const FOOD_PRODUCTS: Product[] = [...foodMealsBatch1, ...foodMealsBatch2];

