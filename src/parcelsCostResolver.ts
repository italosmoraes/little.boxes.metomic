// entry point for a list of parcels in a given format
// call the calculator for each
// and returns a given cost

import { getParcelCostItem } from './calculateParcelCost'
import { Order as ParcelOrder } from './Order'
import { Parcel } from './Parcel'
import { ParcelCostNote, ParcelCostNoteItem } from './ParcelCostNote'
import { ParcelCostItem } from './ParcelCostTable'

const OVERWEIGHT_CHARGE_PER_KILO = 2

export const resolveParcelOrderCost = (order: ParcelOrder): ParcelCostNote => {
  const costItems: ParcelCostItem[] = order.parcels.map((parcel) => getParcelCostItem(parcel))
  // (!) this function associates order.parcel index to associated with the cost Item index

  let totalCost = 0
  costItems.forEach((item) => (totalCost += item.cost))

  if (order.speedyShipping) {
    totalCost *= 2
  }

  const parcelsCostPerItemSummary: ParcelCostNoteItem[] = costItems.map((item) => ({
    size: item.sizeDenomination,
    cost: item.cost,
    overweightCharge: 0
  }))

  // --- Resolve weight limit
  order.parcels.map((parcel, idx) => {
    if (parcel.weight > costItems[idx].weightLimit) {
      // calculate overweight price ('a charge per kg of weight' is a weird wording for a requirement)
      // (?) is it a charge of 2£ per extra weight or 2£ per total weight
      // Here we consider a charge only per extra kg of weight:
      const overweight = parcel.weight - costItems[idx].weightLimit

      const charge = overweight * OVERWEIGHT_CHARGE_PER_KILO

      parcelsCostPerItemSummary[idx].cost = parcelsCostPerItemSummary[idx].cost + charge
      parcelsCostPerItemSummary[idx].overweightCharge = charge

      totalCost += charge
    }
  })

  return {
    items: parcelsCostPerItemSummary,
    speedyShippingCost: order.speedyShipping ? totalCost / 2 : undefined,
    total: totalCost
  }
  // TODO mount result as Small Parcel: £3. Total Cost: £3
}
