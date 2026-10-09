import { Product } from '../types';
import { cookingGasBatch1 } from './cookingGas1';
import { cookingGasBatch2 } from './cookingGas2';

export const COOKING_GAS_PRODUCTS: Product[] = [...cookingGasBatch1, ...cookingGasBatch2];

