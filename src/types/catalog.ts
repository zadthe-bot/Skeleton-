import { ProductOptionGroup } from './options';

export type StoreCategoryType = 'food' | 'groceries' | 'gas';

export interface Seller {
  id: string;
  name: string;
  type: 'restaurant' | 'shop' | 'gas_depot';
  categoryType: StoreCategoryType;
  categoryLabel: string;
  bannerImage: string;
  logoImage: string;
  rating: number;
  reviewCount: number;
  city: string;
  district: string;
  ward: string;
  addressText: string;
  lat: number;
  lng: number;
  estimatedPrepMinutes: number;
  isOpen: boolean;
  openingHours: string;
  deliveryFeeBaseTzs: number;
  minimumOrderTzs: number;
  phoneContact: string;
  tags: string[];
}

export interface Product {
  id: string;
  sellerId: string;
  sellerName: string;
  nameEn: string;
  nameSw: string;
  descriptionEn: string;
  descriptionSw: string;
  priceTzs: number;
  imageUrl: string;
  category: StoreCategoryType;
  menuSubcategory?: string;
  isFood: boolean;
  isAvailable: boolean;
  unit?: string;
  optionGroups?: ProductOptionGroup[];
}
