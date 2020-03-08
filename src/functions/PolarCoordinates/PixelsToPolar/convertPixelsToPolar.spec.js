import { convertPixelsToPolar } from './convertPixelsToPolar'
import { PI } from '../../../constants'

describe('convertPixelsToPolar', () => {
  it('returns { r: 25, phi: 0 } for { x: 25, y: 0 } ', () => {
    const borderSize = { x: 50, y: 50 }
    const location = { x: 25, y: 0 }
    expect(convertPixelsToPolar(location, borderSize)).toEqual({ r: 25, phi: 0 })
  })

  it('returns { r: 25, phi: pi/2 } for { x: 50, y: halfHeight } ', () => {
    const borderSize = { x: 50, y: 50 }
    const location = { x: 50, y: 25 }
    expect(convertPixelsToPolar(location, borderSize)).toEqual({ r: 25, phi: PI / 2 })
  })

  it('returns { r: 25, phi: pi } for { x: 25, y: 50 } ', () => {
    const borderSize = { x: 50, y: 50 }
    const location = { x: 25, y: 50 }
    expect(convertPixelsToPolar(location, borderSize)).toEqual({ r: 25, phi: PI })
  })
})
