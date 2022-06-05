import { calculateParcelCost } from '../calculateParcelCost'
import { MockParcelsList } from '../___mock-data__/MockParcelsList'

describe('calculateParcelCost', () => {
  it('returns correct price for 1cmx1cmx1cm package', () => {
    expect(calculateParcelCost(MockParcelsList[0])).toBe(3)
  })
})
