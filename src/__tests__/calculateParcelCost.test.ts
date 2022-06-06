import { resolveParcelOrderCost } from '../parcelsCostResolver'
import { MockOrders } from '../___mock-data__/MockOrders'

describe('calculateParcelCost', () => {
  it('returns correct price for 1cmx1cmx1cm package', () => {
    const result = resolveParcelOrderCost({
      speedyShipping: true,
      parcels: [{ dimension: { length: 1, width: 1, height: 1 }, weight: 1 }]
    })
    expect(result.total).toBe(6)
    expect(result.speedyShippingCost).toBe(3)
  })

  it('returns correct price for 1cmx1cmx1cm package', () => {
    const result = resolveParcelOrderCost({
      speedyShipping: false,
      parcels: [{ dimension: { length: 1, width: 1, height: 1 }, weight: 1 }]
    })
    expect(result.total).toBe(3)
  })

  it.only('returns correct price for 10cmx1cmx1cm package', () => {
    const result = resolveParcelOrderCost({
      speedyShipping: false,
      parcels: [{ dimension: { length: 10, width: 1, height: 1 }, weight: 1 }]
    })
    expect(result.total).toBe(8)
  })

  it('returns correct price for 10cmx50cmx1cm package', () => {
    const result = resolveParcelOrderCost({
      speedyShipping: false,
      parcels: [{ dimension: { length: 10, width: 1, height: 1 }, weight: 1 }]
    })
    expect(result.total).toBe(15)
  })

  it('returns correct price for 1cmx1cmx1cm package', () => {
    const result = resolveParcelOrderCost({
      speedyShipping: false,
      parcels: [{ dimension: { length: 1, width: 1, height: 1 }, weight: 1 }]
    })
    expect(result.total).toBe(3)
    expect(result.speedyShippingCost).toBe(undefined)
  })
})
