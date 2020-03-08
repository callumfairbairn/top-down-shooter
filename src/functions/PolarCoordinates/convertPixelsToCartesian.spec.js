import { convertPixelsToCartesian, getCartesianX, getCartesianY } from './convertPixelsToCartesian'

describe('convertPixelsToCartesian', () => {
  it('converts { x: 0 , y: 0 } to { x: -maxWidth/2 , y: maxHeight/2 } ', () => {
    const location = { x: 0, y: 0 }
    const screenSize = { x: 50, y: 50 }
    expect(convertPixelsToCartesian(location, screenSize)).toEqual({ x: -25, y: 25 })
  })

  it('converts { x: maxWidth/2 , y: maxHeight } to { x: 0 , y: -maxHeight/2 } ', () => {
    const location = { x: 25, y: 50 }
    const screenSize = { x: 50, y: 50 }
    expect(convertPixelsToCartesian(location, screenSize)).toEqual({ x: 0, y: -25 })
  })
})

describe('getCartesianX', () => {
  it('converts 0 to -maxWidth/2', () => {
    const maxWidth = 50
    expect(getCartesianX(0, maxWidth)).toEqual(-maxWidth / 2)
  })

  it('converts maxWidth/2 to 0', () => {
    const maxWidth = 50
    expect(getCartesianX(maxWidth / 2, maxWidth)).toEqual(0)
  })

  it('converts maxWidth maxWidth/2', () => {
    const maxWidth = 50
    expect(getCartesianX(maxWidth, maxWidth)).toEqual(maxWidth / 2)
  })
})

describe('getCartesianY', () => {
  it('converts 0 to maxWidth/2', () => {
    const maxWidth = 50
    expect(getCartesianY(0, maxWidth)).toEqual(maxWidth / 2)
  })

  it('converts maxWidth/2 to 0', () => {
    const maxWidth = 50
    expect(getCartesianX(maxWidth / 2, maxWidth)).toEqual(0)
  })

  it('converts maxWidth -maxWidth/2', () => {
    const maxWidth = 50
    expect(getCartesianX(maxWidth, maxWidth)).toEqual(maxWidth / 2)
  })
})
