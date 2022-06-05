import { resolveParcelOrderCost } from '../parcelsCostResolver'
import { MockOrders } from '../___mock-data__/MockOrders'

describe('calculateParcelCost', () => {
  it('returns correct price for 1cmx1cmx1cm package', () => {
    const result = resolveParcelOrderCost(MockOrders[0])
    expect(result.total).toBe(6)
    expect(result.speedyShippingCost).toBe(3)
  })
})
