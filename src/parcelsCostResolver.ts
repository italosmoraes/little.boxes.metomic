// entry point for a list of parcels in a given format
// call the calculator for each
// and returns a given cost

import { getParcelCostItem } from './calculateParcelCost'
import { Order as ParcelOrder } from './Order'
import { Parcel } from './Parcel'
import { ParcelCostNote } from './ParcelCostNote'
import { ParcelCostItem } from './ParcelCostTable'

export const resolveParcelOrderCost: ParcelCostNote = (order: ParcelOrder) => {
  const costItems: ParcelCostItem[] = order.parcels.map((parcel) => getParcelCostItem(parcel))

  let totalCost = 0
  costItems.forEach((item) => (totalCost += item.cost))

  if (order.speedyShipping) {
    totalCost *= 2
  }

  return {
    items: costItems.map((item) => ({ size: item.sizeDenomination, cost: item.cost })),
    speedyShippingCost: totalCost / 2,
    total: totalCost
  }
  // TODO mount result as Small Parcel: £3. Total Cost: £3
}
