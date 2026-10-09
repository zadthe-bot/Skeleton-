import { CityInfo, TanzanianAddress } from '../../types';

export const createAddressObject = (
  city: CityInfo,
  ward: string,
  street: string,
  landmark: string
): TanzanianAddress => ({
  id: `addr-${Date.now()}`,
  label: ward,
  region: city.region,
  district: city.districts[0] || 'Kinondoni',
  ward,
  street,
  landmark,
  lat: -6.7645,
  lng: 39.2482,
});
