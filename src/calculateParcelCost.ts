import { Parcel } from './Parcel'
import { ParcelCostItem, ParcelCostTable } from './ParcelCostTable'

export const getParcelCostItem = (parcel: Parcel): ParcelCostItem => {
  for (const [key, value] of Object.entries(parcel)) {
    for (const costItem of ParcelCostTable) {
      if (value > costItem.maxDimension) {
        continue
      }
      return costItem
    }
  }

  throw new Error(`Unable to find cost for parcel ${parcel}`)
}
