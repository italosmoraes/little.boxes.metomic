export interface ParcelCostItem {
  sizeDenomination: string
  maxDimension: number
  cost: number
  weightLimit: number
}

export const ParcelCostTable: ParcelCostItem[] = [
  { sizeDenomination: 'Small', maxDimension: 9, weightLimit: 1, cost: 3 },
  { sizeDenomination: 'Medium', maxDimension: 49, weightLimit: 3, cost: 8 },
  { sizeDenomination: 'Large', maxDimension: 99, weightLimit: 6, cost: 15 },
  { sizeDenomination: 'XL', maxDimension: 9999, weightLimit: 10, cost: 8 },
  { sizeDenomination: 'Heavy', maxDimension: 9999, weightLimit: 50, cost: 50 }
]
