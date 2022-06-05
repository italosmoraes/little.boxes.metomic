export interface ParcelCostItem {
  sizeDenomination: string
  maxDimension: number
  cost: number
}

export const ParcelCostTable: ParcelCostItem[] = [
  { sizeDenomination: 'Small', maxDimension: 9, cost: 3 },
  { sizeDenomination: 'Medium', maxDimension: 49, cost: 8 },
  { sizeDenomination: 'Large', maxDimension: 99, cost: 15 },
  { sizeDenomination: 'XL', maxDimension: 9999, cost: 8 }
]
