import { convertPolarToPixels } from './convertPolarToPixels'
import { convertPixelsToPolar } from './convertPixelsToPolar'

describe('convertPolarToPixels', () => {
  it('converts { r: 25 , phi: 0 } to { x: 25 , y: 0 }', () => {
    const polarLocation = { r: 25, phi: 0 }
    const screenSize = { x: 50, y: 50 }
    expect(convertPolarToPixels(polarLocation, screenSize)).toEqual({ x: 25, y: 0 })
  })

  it('converts to polar and back again', () => {
    const pixelLocation = { x: 36, y: 45 }
    const screenSize = { x: 50, y: 50 }
    const polarLocation = convertPixelsToPolar(pixelLocation, screenSize)
    expect(convertPolarToPixels(polarLocation, screenSize)).toEqual(pixelLocation)
  })
})
