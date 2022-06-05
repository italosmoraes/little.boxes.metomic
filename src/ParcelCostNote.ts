export interface ParcelCostNote {
  total: number
  speedyShippingCost?: number
  items: {
    size: string // small, etc
    cost: number
  }[]
}
