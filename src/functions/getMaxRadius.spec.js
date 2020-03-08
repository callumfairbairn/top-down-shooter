import { getMaxRadius } from './getMaxRadius'
import { PI } from '../constants'

describe('getMaxRadius', () => {
  it('returns 25 given an angle of 0', () => {
    const screenSize = { x: 50, y: 50 }
    expect(getMaxRadius(0, screenSize)).toEqual(25)
  })

  it('returns sqrt(25^2 + 25^2) given an angle of pi/4', () => {
    const screenSize = { x: 50, y: 50 }
    const hypotenuse = Math.sqrt(Math.pow(25, 2) + Math.pow(25, 2))
    expect(getMaxRadius(PI / 4, screenSize).toFixed(5)).toEqual(hypotenuse.toFixed(5))
  })

  it('returns 25 given an angle of pi/2', () => {
    const screenSize = { x: 50, y: 50 }
    expect(getMaxRadius(PI / 2, screenSize)).toEqual(25)
  })

  it('returns sqrt(25^2 + 25^2) given an angle of 3/4 pi', () => {
    const screenSize = { x: 50, y: 50 }
    const hypotenuse = Math.sqrt(Math.pow(25, 2) + Math.pow(25, 2))
    expect(getMaxRadius(PI * 3 / 4, screenSize).toFixed(5)).toEqual(hypotenuse.toFixed(5))
  })

  it('returns 25 given an angle of pi', () => {
    const screenSize = { x: 50, y: 50 }
    expect(getMaxRadius(PI, screenSize)).toEqual(25)
  })

  it('returns sqrt(25^2 + 25^2) given an angle of 5/4 pi', () => {
    const screenSize = { x: 50, y: 50 }
    const hypotenuse = Math.sqrt(Math.pow(25, 2) + Math.pow(25, 2))
    expect(getMaxRadius(PI * 5 / 4, screenSize).toFixed(5)).toEqual(hypotenuse.toFixed(5))
  })

  it('returns 25 given an angle of 3/2 pi', () => {
    const screenSize = { x: 50, y: 50 }
    expect(getMaxRadius(PI * 3 / 2, screenSize)).toEqual(25)
  })

  it('returns sqrt(25^2 + 25^2) given an angle of 7/4 pi', () => {
    const screenSize = { x: 50, y: 50 }
    const hypotenuse = Math.sqrt(Math.pow(25, 2) + Math.pow(25, 2))
    expect(getMaxRadius(PI * 7 / 4, screenSize).toFixed(5)).toEqual(hypotenuse.toFixed(5))
  })
})
