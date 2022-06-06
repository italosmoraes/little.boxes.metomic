import { Parcel } from './Parcel'
import { ParcelCostItem, ParcelCostTable } from './ParcelCostTable'

export const getParcelCostItem = (parcel: Parcel): ParcelCostItem => {
  let currentCostItem
  for (const [key, value] of Object.entries(parcel.dimension)) {
    // 10, 10, 50
    for (const costItem of ParcelCostTable) {
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
      break
    }
  }

  if (!currentCostItem) {
    throw new Error(`Unable to find cost for parcel ${parcel}`)
  }

  return currentCostItem
}
