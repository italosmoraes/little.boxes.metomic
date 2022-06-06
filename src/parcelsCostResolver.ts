import { getParcelCostItem } from './calculateParcelCost'
import { Order as ParcelOrder } from './Order'
import { Parcel } from './Parcel'
import { ParcelCostNote, ParcelCostNoteItem } from './ParcelCostNote'
import { ParcelCostItem, SIZE } from './ParcelCostTable'

const OVERWEIGHT_CHARGE_PER_KILO = 2
const OVERWEIGHT_CHARGE_HEAVY = 1

export const resolveParcelOrderCost = (order: ParcelOrder): ParcelCostNote => {
  const costItems: ParcelCostItem[] = order.parcels.map((parcel) => getParcelCostItem(parcel))
  // (!) this function associates order.parcel index to associated with the cost Item index

  let totalCost = 0
  costItems.forEach((item) => (totalCost += item.cost))

  const parcelsCostPerItemSummary: ParcelCostNoteItem[] = costItems.map((item) => ({
    size: item.sizeDenomination,
    cost: item.cost,
    overweightCharge: 0,
    discount: 0
  }))

  // --- Resolve special discounts
  // Assuming that "Discounts should not impact the price of individual parcels, i.e. their individual cost should remain the same as it was before" means:
  // show the original price for the parcel, but apply discount from total
  // Also assuming here, given the example from phase 5, that:
  // the overweight charge should be applied after the discounts
  let discountToApply = 0

  const smallParcelCount = parcelsCostPerItemSummary.filter((i) => i.size === SIZE.SMALL).length
  const mediumParcelCount = parcelsCostPerItemSummary.filter((i) => i.size === SIZE.MEDIUM).length
  const totalParcelCount = parcelsCostPerItemSummary.length

  if (smallParcelCount >= 4) {
    discountToApply += parcelsCostPerItemSummary[3].cost
  }

  if (mediumParcelCount >= 3) {
    discountToApply += parcelsCostPerItemSummary[2].cost
  }

  if (totalParcelCount >= 5) {
    discountToApply += parcelsCostPerItemSummary[4].cost
  }

  totalCost -= discountToApply

  // -- Resolve speedy delivery

  if (order.speedyShipping) {
    totalCost *= 2
  }

  // --- Resolve weight limit
  order.parcels.map((parcel, idx) => {
    if (parcel.weight > costItems[idx].weightLimit) {
      // calculate overweight price ('a charge per kg of weight' is a weird wording for a requirement)
      // (?) is it a charge of 2£ per extra weight or 2£ per total weight
      // Here we consider a charge only per extra kg of weight:
      const overweight = parcel.weight - costItems[idx].weightLimit

      const charge =
        parcel.weight > 10 // highest threshold before 50kg
          ? overweight * OVERWEIGHT_CHARGE_HEAVY
          : overweight * OVERWEIGHT_CHARGE_PER_KILO

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
