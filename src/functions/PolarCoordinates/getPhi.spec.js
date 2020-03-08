import { firstQuadrantAngle, fourthQuadrantAngle, getPhi, secondQuadrantAngle, thirdQuadrantAngle } from './getPhi'

describe('getPhi', () => {
  it('converts { x: 0 , y: 1 } to 0', () => {
    const location = { x: 0 , y: 1 }
    expect(getPhi(location)).toEqual(0)
  })

  it('converts { x: 1 , y: 0 } to pi/2', () => {
    const location = { x: 1 , y: 0 }
    expect(getPhi(location)).toEqual(Math.PI/2)
  })

  it('converts { x: 0 , y: -1 } to pi', () => {
    const location = { x: 0 , y: -1 }
    expect(getPhi(location)).toEqual(Math.PI)
  })

  it('converts { x: -1 , y: 0 } to 3/2 pi', () => {
    const location = { x: -1 , y: 0 }
    expect(getPhi(location)).toEqual(3/2 * Math.PI)
  })

  it('converts { x: 0.5, y: 0.5 } to pi/4', () => {
    const location = { x: 0.5 , y: 0.5 }
    expect(getPhi(location)).toEqual(Math.PI/4)
  })

  it('converts { x: 0.5, y: -0.5 } to 3/4 pi', () => {
    const location = { x: 0.5 , y: -0.5 }
    expect(getPhi(location)).toEqual(Math.PI * 3/4)
  })

  it('converts { x: -0.5, y: -0.5 } to 5/4 pi', () => {
    const location = { x: -0.5 , y: -0.5 }
    expect(getPhi(location)).toEqual(Math.PI * 5/4)
  })

  it('converts { x: -0.5, y: 0.5 } to 7/4 pi', () => {
    const location = { x: -0.5 , y: 0.5 }
    expect(getPhi(location)).toEqual(Math.PI * 7/4)
  })
})

describe('firstQuadrantAngle', () => {
  it('returns 0 for { x: 0 , y: 1 }', () => {
    expect(firstQuadrantAngle({ x: 0 , y: 1 })).toEqual(0)
  })

  it('returns pi/4 for { x: 0.5 , y: 0.5 }', () => {
    expect(firstQuadrantAngle({ x: 0.5 , y: 0.5 })).toEqual(Math.PI/4)
  })
})

describe('secondQuadrantAngle', () => {
  it('returns pi/2 for { x: 1 , y: 0 }', () => {
    expect(secondQuadrantAngle({ x: 1 , y: 0 })).toEqual(Math.PI/2)
  })

  it('returns 3/4 pi for { x: 0.5 , y: -0.5 }', () => {
    expect(secondQuadrantAngle({ x: 0.5 , y: -0.5 })).toEqual(Math.PI * 3/4)
  })
})

describe('thirdQuadrantAngle', () => {
  it('returns pi for { x: 0 , y: 1 }', () => {
    expect(thirdQuadrantAngle({ x: 0 , y: 1 })).toEqual(Math.PI)
  })

  it('returns 5/4 pi for { x: -0.5 , y: -0.5 }', () => {
    expect(thirdQuadrantAngle({ x: -0.5 , y: -0.5 })).toEqual(Math.PI * 5/4)
  })
})

describe('fourthQuadrantAngle', () => {
  it('returns 3/2 pi for { x: -1 , y: 0 }', () => {
    expect(fourthQuadrantAngle({ x: -1 , y: 0 })).toEqual(Math.PI * 3/2)
  })

  it('returns 7/4 pi for { x: -0.5 , y: 0.5 }', () => {
    expect(fourthQuadrantAngle({ x: -0.5 , y: 0.5 })).toEqual(Math.PI * 7/4)
  })
})