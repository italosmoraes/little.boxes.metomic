import { getParcelCostItem } from '../calculateParcelCost'
import { parcelCostHandler } from '../parcelCostsHandler'
import { resolveParcelOrderCost } from '../parcelsCostResolver'
import { MockOrders } from '../___mock-data__/MockOrders'
import { MockParcelsList } from '../___mock-data__/MockParcelsList'

describe('parcelCostResolver', () => {
  it('returns correct price for 1cmx1cmx1cm package with speedyShipping', () => {
    const result = parcelCostHandler(MockOrders[0])

    expect(result[0]).toEqual('small parcel. Total Cost: £3')
  })
})
