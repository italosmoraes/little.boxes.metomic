import { getParcelCostItem } from '../calculateParcelCost'
import { resolveParcelOrderCost } from '../parcelsCostResolver'
import { MockOrders } from '../___mock-data__/MockOrders'
import { MockParcelsList } from '../___mock-data__/MockParcelsList'

describe('parcelCostResolver', () => {
  it('returns correct price for 1cmx1cmx1cm package with speedyShipping', () => {
    const result = resolveParcelOrderCost(MockOrders[0])
    expect(result.total).toBe(6)
  })

  it('add overweight charge correctly', () => {
    const result = resolveParcelOrderCost({
      speedyShipping: false,
      parcels: [{ dimension: { length: 1, width: 1, height: 1 }, weight: 2 }]
    })
    expect(result.total).toBe(5)
    expect(result.items[0].overweightCharge).toBe(2)
  })

  it('add overweight charge for Heavy parcel correctly', () => {
    const result = resolveParcelOrderCost({
      speedyShipping: false,
      parcels: [{ dimension: { length: 1, width: 101, height: 1 }, weight: 15 }]
    })
    expect(result.total).toBe(50)
    expect(result.items[0].overweightCharge).toBe(0)
  })
})
