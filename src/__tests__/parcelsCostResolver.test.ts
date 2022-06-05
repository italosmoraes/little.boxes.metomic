import { getParcelCostItem } from '../calculateParcelCost'
import { MockParcelsList } from '../___mock-data__/MockParcelsList'

describe('parcelCostResolver', () => {
  it('returns correct price for 1cmx1cmx1cm package with speedyShipping', () => {
    expect(getParcelCostItem(MockParcelsList[0]).cost).toBe(3)
  })
})
