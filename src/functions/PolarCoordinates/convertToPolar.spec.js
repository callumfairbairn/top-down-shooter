import { convertToPolar } from './convertToPolar'

describe('convertToPolar', () => {
  it('returns { r: 25, phi: 0 } for { x: 25, y: 0 } ', () => {
    const borderSize = { x: 50, y: 50 }
    const location = { x: 25, y: 0 }
    expect(convertToPolar(location, borderSize)).toEqual({ r: 25, phi: 0 })
  })

  it('returns { r: 25, phi: 90 } for { x: 50, y: halfHeight } ', () => {
    const borderSize = { x: 50, y: 50 }
    const location = { x: 50, y: 25 }
    expect(convertToPolar(location, borderSize)).toEqual({ r: 25, phi: Math.PI / 2 })
  })

  it('returns { r: 25, phi: 180 } for { x: 25, y: 50 } ', () => {
    const borderSize = { x: 50, y: 50 }
    const location = { x: 25, y: 50 }
    expect(convertToPolar(location, borderSize)).toEqual({ r: 25, phi: Math.PI })
  })
})
