import { Product } from '../types';

export const groceriesBatch2: Product[] = [
  {
    id: 'prod-korie-oil',
    sellerId: 'seller-kariakoo-fresh',
    sellerName: 'Kariakoo Sokoni',
    nameEn: 'Korie Cooking Oil (3 Litres)',
    nameSw: 'Mafuta ya Korie (Lita 3)',
    descriptionEn: 'Refined vegetable cooking oil with Vitamin A.',
    descriptionSw: 'Mafuta safi ya mboga yasiyo na lehemu ya kupikia.',
    priceTzs: 18500,
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    category: 'groceries',
    menuSubcategory: 'Cooking Oils',
    isFood: false,
    isAvailable: true,
    unit: '3 L bottle',
  },
];
