import { Parcel } from './Parcel'

export interface Order {
  speedyShipping?: boolean
  parcels: Parcel[]
}
