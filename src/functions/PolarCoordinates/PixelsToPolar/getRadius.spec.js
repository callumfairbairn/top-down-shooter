import { getRadius } from './getRadius'

describe('getRadius', () => {
  it('returns 1 given cartesian { x: 0 , y: 1 }', () => {
    const cartesianLocation = { x: 0, y: 1 }
    expect(getRadius(cartesianLocation)).toEqual(1)
  })
})
