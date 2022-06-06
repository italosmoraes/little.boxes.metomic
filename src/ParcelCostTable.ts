export enum SIZE {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  XL = 'xl',
  HEAVY = 'heavy'
}
export interface ParcelCostItem {
  sizeDenomination: SIZE
  maxDimension: number
  cost: number
  weightLimit: number
}

export const ParcelCostTable: ParcelCostItem[] = [
  { sizeDenomination: SIZE.SMALL, maxDimension: 9, weightLimit: 1, cost: 3 },
  { sizeDenomination: SIZE.MEDIUM, maxDimension: 49, weightLimit: 3, cost: 8 },
  { sizeDenomination: SIZE.LARGE, maxDimension: 99, weightLimit: 6, cost: 15 },
  { sizeDenomination: SIZE.XL, maxDimension: 9999, weightLimit: 10, cost: 8 },
  { sizeDenomination: SIZE.HEAVY, maxDimension: 99999, weightLimit: 50, cost: 50 }
]
