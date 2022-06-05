import { Parcel } from './Parcel'
import { ParcelCostItem, ParcelCostTable } from './ParcelCostTable'

export const getParcelCostItem = (parcel: Parcel): ParcelCostItem => {
  for (const [key, value] of Object.entries(parcel)) {
    console.log(key, value)
    for (const costItem of ParcelCostTable) {
      console.log(costItem)
      if (value > costItem.maxDimension) {
        continue
      }
      return costItem
    }
  }

  throw new Error(`Unable to find cost for parcel ${parcel}`)
}
