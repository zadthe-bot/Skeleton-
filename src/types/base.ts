export type Language = 'en' | 'sw';
export type ThemeMode = 'light' | 'dark';

export interface TanzanianAddress {
  id: string;
  label: string;
  region: string;
  district: string;
  ward: string;
  street: string;
  landmark: string;
  notesForRider?: string;
  lat: number;
  lng: number;
}

export interface CityInfo {
  id: string;
  name: string;
  region: string;
  country: string;
  isSupported: boolean;
  serviceStatus: 'active' | 'coming_soon';
  districts: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  phoneNumber?: string;
  isGuest: boolean;
  savedAddresses: TanzanianAddress[];
}
