import React from 'react';
import { useApp } from '../../context/AppContext';
import { Seller, Product } from '../../types';
import { HomeHero } from './HomeHero';
import { GasServiceBanner } from './GasServiceBanner';
import { HomeSections } from './HomeSections';

interface HomeScreenProps {
  onSelectSeller: (seller: Seller) => void;
  onSelectProduct: (product: Product) => void;
  onOpenSearch: () => void;
  onGoToGroceries: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectSeller,
  onSelectProduct,
  onOpenSearch,
  onGoToGroceries,
}) => {
  const { sellers, products, currentCity, language } = useApp();
  const restaurants = sellers.filter((s: Seller) => s.type === 'restaurant');
  const meals = products.filter((p: Product) => p.isFood).slice(0, 4);

  return (
    <div className="space-y-4 pb-24 animate-in fade-in duration-150">
      <HomeHero language={language} cityName={currentCity.name} onSearch={onOpenSearch} />
      <GasServiceBanner language={language} onSelectGas={onGoToGroceries} />
      <HomeSections restaurants={restaurants} meals={meals} language={language} onSelectSeller={onSelectSeller} onSelectProduct={onSelectProduct} />
    </div>
  );
};

