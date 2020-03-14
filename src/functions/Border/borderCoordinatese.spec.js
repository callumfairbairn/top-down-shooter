import {
  getBottomLeftBorderCoord,
  getBottomRightBorderCoord,
  getTopLeftBorderCoord,
  getTopRightBorderCoord
} from './borderCoordinates'

const screenSize = { x: 50, y: 50 }

describe('getTopLeftBorderCoord', () => {
  it('returns (0, 0) by default', () => {
    expect(getTopLeftBorderCoord(0, { x: 0, y: 0 })).toEqual('0,0')
  })

  it('returns (1, 1) for an inset of 1', () => {
    expect(getTopLeftBorderCoord(1, { x: 0, y: 0 })).toEqual('1,1')
  })

  it('returns (-1, -1) for a position of (1, 1)', () => {
    expect(getTopLeftBorderCoord(0, { x: 1, y: 1 })).toEqual('-1,-1')
  })
})

describe('getBottomLeftBorderCoord', () => {
  it('returns (0, 50) by default', () => {
    expect(getBottomLeftBorderCoord(0, { x: 0, y: 0 }, screenSize)).toEqual('0,50')
  })

  it('returns (1, 1) for an inset of 1', () => {
    expect(getBottomLeftBorderCoord(1, { x: 0, y: 0 }, screenSize)).toEqual('1,49')
  })

  it('returns (-1, 49) for a position of (1, 1)', () => {
    expect(getBottomLeftBorderCoord(0, { x: 1, y: 1 }, screenSize)).toEqual('-1,49')
  })
})

describe('getBottomRightBorderCoord', () => {
  it('returns (50, 50) by default', () => {
    expect(getBottomRightBorderCoord(0, { x: 0, y: 0 }, screenSize)).toEqual('50,50')
  })

  it('returns (49, 49) for an inset of 1', () => {
    expect(getBottomRightBorderCoord(1, { x: 0, y: 0 }, screenSize)).toEqual('49,49')
  })

  it('returns (49, 49) for a position of (1, 1)', () => {
    expect(getBottomRightBorderCoord(0, { x: 1, y: 1 }, screenSize)).toEqual('49,49')
  })
})

describe('getTopRightBorderCoord', () => {
  it('returns (50, 0) by default', () => {
    expect(getTopRightBorderCoord(0, { x: 0, y: 0 }, screenSize)).toEqual('50,0')
  })

  it('returns (49, 1) for an inset of 1', () => {
    expect(getTopRightBorderCoord(1, { x: 0, y: 0 }, screenSize)).toEqual('49,1')
  })

  it('returns (49, -1) for a position of (1, 1)', () => {
    expect(getTopRightBorderCoord(0, { x: 1, y: 1 }, screenSize)).toEqual('49,-1')
  })
})
