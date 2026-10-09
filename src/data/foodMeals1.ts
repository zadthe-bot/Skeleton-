import { Product } from '../types';

export const foodMealsBatch1: Product[] = [
  {
    id: 'prod-mishkaki',
    sellerId: 'seller-mamboz',
    sellerName: 'Mamboz BBQ',
    nameEn: 'Tender Beef Mishkaki (5 sticks)',
    nameSw: "Mishkaki ya Ng'ombe (5)",
    descriptionEn: 'Charcoal grilled beef fillet skewers with tamarind dip.',
    descriptionSw: "Mishkaki ya nyama ya ng'ombe kwenye mkaa.",
    priceTzs: 9500,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    category: 'food',
    menuSubcategory: 'BBQ Skewers',
    isFood: true,
    isAvailable: true,
  },
  {
    id: 'prod-chips-mayai',
    sellerId: 'seller-mamboz',
    sellerName: 'Mamboz BBQ',
    nameEn: 'Chips Mayai Zege Special',
    nameSw: 'Chips Mayai Maalum (Zege)',
    descriptionEn: 'Golden fries pan-fried with 3 eggs and kachumbari.',
    descriptionSw: 'Chips zilizokaangwa na mayai 3 na kachumbari.',
    priceTzs: 7000,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    category: 'food',
    menuSubcategory: 'Street Classics',
    isFood: true,
    isAvailable: true,
  },
];
