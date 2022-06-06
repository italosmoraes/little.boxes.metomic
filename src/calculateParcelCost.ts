import { Parcel } from './Parcel'
import { ParcelCostItem, ParcelCostTable } from './ParcelCostTable'

export const getParcelCostItem = (parcel: Parcel): ParcelCostItem => {
  let currentCostItem
  for (const [key, value] of Object.entries(parcel.dimension)) {
    if (currentCostItem && currentCostItem.maxDimension > value) {
      continue
    }

    for (const costItem of ParcelCostTable) {
      console.log('value', value, costItem.maxDimension)
      if (value > costItem.maxDimension) {
        console.log('continue')
        continue
      }
      console.log('changeCurrent', costItem)

      // compare current item with new one, and keep greater cost
      currentCostItem =
        (currentCostItem && currentCostItem.maxDimension < costItem.maxDimension) ||
        !currentCostItem
          ? costItem
          : currentCostItem

      // accounts for heavy parcels
      if (parcel.weight > 10) {
        continue
      }

      break
    }
  }
  console.log('returning', currentCostItem)
  if (!currentCostItem) {
    throw new Error(`Unable to find cost for parcel ${parcel}`)
  }

  return currentCostItem
}
