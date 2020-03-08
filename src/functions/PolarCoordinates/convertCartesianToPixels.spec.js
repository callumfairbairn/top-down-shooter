import { convertCartesianToPixels, getPixelX, getPixelY } from './convertCartesianToPixels'

describe('convertCartesianToPixels', () => {
  it('converts { x: 0 , y: 25 } to { x: 25 , y: 0 }', () => {
    const cartesianLocation = { x: 0, y: 25 }
    const screenSize = { x: 50, y: 50 }
    expect(convertCartesianToPixels(cartesianLocation, screenSize)).toEqual({ x: 25, y: 0 })
  })

  it('converts { x: 25 , y: 0 } to { x: 50 , y: 25 }', () => {
    const cartesianLocation = { x: 25, y: 0 }
    const screenSize = { x: 50, y: 50 }
    expect(convertCartesianToPixels(cartesianLocation, screenSize)).toEqual({ x: 50, y: 25 })
  })

  it('converts { x: 0 , y: -25 } to { x: 25 , y: 50 }', () => {
    const cartesianLocation = { x: 0, y: -25 }
    const screenSize = { x: 50, y: 50 }
    expect(convertCartesianToPixels(cartesianLocation, screenSize)).toEqual({ x: 25, y: 50 })
  })

  it('converts { x: -25 , y: 0 } to { x: 0 , y: 25 }', () => {
    const cartesianLocation = { x: -25, y: 0 }
    const screenSize = { x: 50, y: 50 }
    expect(convertCartesianToPixels(cartesianLocation, screenSize)).toEqual({ x: 0, y: 25 })
  })
})

describe('getPixelX', () => {
  it('returns 25 for 0 ', () => {
    expect(getPixelX(0, 50)).toEqual(25)
  })

  it('returns 0 for -25 ', () => {
    expect(getPixelX(-25, 50)).toEqual(0)
  })

  it('returns 50 for 25 ', () => {
    expect(getPixelX(25, 50)).toEqual(50)
  })
})

describe('getPixelY', () => {
  it('returns 25 for 0 ', () => {
    expect(getPixelY(0, 50)).toEqual(25)
  })

  it('returns 0 for 25 ', () => {
    expect(getPixelY(25, 50)).toEqual(0)
  })

  it('returns 50 for -25 ', () => {
    expect(getPixelY(-25, 50)).toEqual(50)
  })
})
