import { Parcel } from './Parcel'
import { ParcelCostTable } from './ParcelCostTable'

export const calculateParcelCost = (parcel: Parcel) => {
  for (const [key, value] of Object.entries(parcel)) {
    console.log(key, value)
    for (const costItem of ParcelCostTable) {
      console.log(costItem)
      if (value > costItem.maxDimension) {
        continue
      }
      return costItem.cost
    }
  }

  throw new Error(`Unable to find cost for parcel ${parcel}`)
}
