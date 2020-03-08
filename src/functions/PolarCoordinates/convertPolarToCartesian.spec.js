import { convertPolarToCartesian } from './convertPolarToCartesian'
import { PI } from '../../constants'

describe('convertPolarToCartesian', () => {
  it('converts { r: 25 , phi: 0 } to { x: 0 , y: 25 }', () => {
    const polarLocation = { r: 25 , phi: 0 }
    expect(convertPolarToCartesian(polarLocation)).toEqual({ x: 0 , y: 25 })
  })

  it('converts { r: 25 , phi: pi/2 } to { x: 25 , y: 0 }', () => {
    const polarLocation = { r: 25 , phi: PI/2 }
    expect(convertPolarToCartesian(polarLocation)).toEqual({ x: 25 , y: 0 })
  })

  it('converts { r: 25 , phi: pi } to { x: 0 , y: -25 }', () => {
    const polarLocation = { r: 25 , phi: PI }
    expect(convertPolarToCartesian(polarLocation)).toEqual({ x: 0 , y: -25 })
  })

  it('converts { r: 25 , phi: 3/2 pi } to { x: -25 , y: 0 }', () => {
    const polarLocation = { r: 25 , phi: PI * 3 / 2 }
    expect(convertPolarToCartesian(polarLocation)).toEqual({ x: -25 , y: 0 })
  })
})