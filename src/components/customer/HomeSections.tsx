import React from 'react';
import { Seller, Product } from '../../types';
import { HomeRestaurantCard } from './HomeRestaurantCard';
import { HomeMealCard } from './HomeMealCard';

interface HomeSectionsProps {
  restaurants: Seller[];
  meals: Product[];
  language: string;
  onSelectSeller: (s: Seller) => void;
  onSelectProduct: (p: Product) => void;
}

export const HomeSections: React.FC<HomeSectionsProps> = ({
  restaurants,
  meals,
  language,
  onSelectSeller,
  onSelectProduct,
}) => (
  <>
    <div className="space-y-2">
      <h3 className="font-black text-sm text-[#1F1E1D] dark:text-[#F5F5F3]">Featured Restaurants</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {restaurants.map((s) => (
          <HomeRestaurantCard key={s.id} seller={s} onSelect={onSelectSeller} />
        ))}
      </div>
    </div>
    <div className="space-y-2">
      <h3 className="font-black text-sm text-[#1F1E1D] dark:text-[#F5F5F3]">Popular Swahili Dishes</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {meals.map((m) => (
          <HomeMealCard key={m.id} product={m} language={language} onSelect={onSelectProduct} />
        ))}
      </div>
    </div>
  </>
);
