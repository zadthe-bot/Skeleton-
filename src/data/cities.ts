import { CityInfo } from '../types';

export const CITIES_DATA: CityInfo[] = [
  {
    id: 'dar',
    name: 'Dar es Salaam',
    region: 'Dar es Salaam',
    country: 'Tanzania',
    isSupported: true,
    serviceStatus: 'active',
    districts: ['Kinondoni', 'Ilala', 'Temeke', 'Ubungo', 'Kigamboni'],
  },
  {
    id: 'arusha',
    name: 'Arusha',
    region: 'Arusha',
    country: 'Tanzania',
    isSupported: true,
    serviceStatus: 'active',
    districts: ['Arusha City', 'Arumeru'],
  },
  {
    id: 'zanzibar',
    name: 'Zanzibar (Stone Town)',
    region: 'Mjini Magharibi',
    country: 'Tanzania',
    isSupported: true,
    serviceStatus: 'active',
    districts: ['Urban District', 'West District'],
  },
  {
    id: 'dodoma',
    name: 'Dodoma',
    region: 'Dodoma',
    country: 'Tanzania',
    isSupported: false,
    serviceStatus: 'coming_soon',
    districts: ['Dodoma Urban'],
  },
];
