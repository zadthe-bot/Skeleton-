import { RESTAURANTS_DATA } from './foodSellers';
import { GROCERY_SELLERS_DATA } from './grocerySellers';
import { FOOD_PRODUCTS } from './foodMeals';
import { GROCERY_PRODUCTS } from './groceries';
import { COOKING_GAS_PRODUCTS } from './cookingGas';

export { CITIES_DATA } from './cities';
export { INITIAL_SAVED_ADDRESSES } from './addresses';

export const SELLERS_DATA = [
  ...RESTAURANTS_DATA,
  ...GROCERY_SELLERS_DATA,
];

export const PRODUCTS_DATA = [
  ...FOOD_PRODUCTS,
  ...GROCERY_PRODUCTS,
  ...COOKING_GAS_PRODUCTS,
];
