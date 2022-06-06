// entry point
import { Order as ParcelOrder } from './Order'
import { resolveParcelOrderCost } from './parcelsCostResolver'

export const parcelCostHandler = (order: ParcelOrder) => {
  const resolved = resolveParcelOrderCost(order)

  const summary = []

  for (const item of resolved.items) {
    summary.push(`${item.size} parcel. Total Cost: £${item.cost}`)
  }

  return summary
}
