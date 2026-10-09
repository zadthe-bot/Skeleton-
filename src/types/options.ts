export interface ProductOptionChoice {
  id: string;
  nameEn: string;
  nameSw: string;
  priceDeltaTzs: number;
}

export interface ProductOptionGroup {
  id: string;
  titleEn: string;
  titleSw: string;
  required: boolean;
  choices: ProductOptionChoice[];
}
