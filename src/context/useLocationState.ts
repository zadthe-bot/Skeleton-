import { useState } from 'react';
import { CityInfo, TanzanianAddress } from '../types';
import { CITIES_DATA, INITIAL_SAVED_ADDRESSES } from '../data';

export const useLocationState = () => {
  const [currentCity, setCurrentCity] = useState<CityInfo>(CITIES_DATA[0]);
  const [savedAddresses, setSavedAddresses] = useState<TanzanianAddress[]>(INITIAL_SAVED_ADDRESSES);
  const [currentAddress, setCurrentAddress] = useState<TanzanianAddress>(INITIAL_SAVED_ADDRESSES[0]);

  const selectCity = (cityId: string) => {
    const matched = CITIES_DATA.find((c) => c.id === cityId);
    if (matched) setCurrentCity(matched);
  };

  const addSavedAddress = (addr: Omit<TanzanianAddress, 'id'>) => {
    const newAddr: TanzanianAddress = {
      ...addr,
      id: `addr-${Date.now()}`,
    };
    setSavedAddresses((prev) => [newAddr, ...prev]);
    setCurrentAddress(newAddr);
  };

  return {
    currentCity,
    selectCity,
    currentAddress,
    setCurrentAddress,
    savedAddresses,
    addSavedAddress,
  };
};
