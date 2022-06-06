export interface ParcelCostNote {
  total: number
  speedyShippingCost?: number
  items: ParcelCostNoteItem[]
}

export interface ParcelCostNoteItem {
  size: string // small, etc
  cost: number
  overweightCharge?: number
  discount?: number
}
