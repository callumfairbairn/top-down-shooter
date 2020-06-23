import { updateResultantSpeed } from './updateResultantSpeed'

describe('updateResultantSpeed', () => {
  it('gives (0, 0) when all speed directions are 0', () => {
    const speedObj = { up: 0, left: 0, down: 0, right: 0 }
    const resultantSpeed = { x: 0 , y: 0 }

    updateResultantSpeed(speedObj, resultantSpeed)

    expect(resultantSpeed).toEqual({ x: 0 , y: 0 })
  })

  it('gives positive numbers for when right and up are pressed', () => {
    const speedObj = { up: 4, left: 0, down: 0, right: 4 }
    const resultantSpeed = { x: 0 , y: 0 }

    updateResultantSpeed(speedObj, resultantSpeed)

    expect(resultantSpeed).toEqual({ x: 4 , y: 4 })
  })

  it('gives negative numbers for when left and down are pressed', () => {
    const speedObj = { up: 0, left: 4, down: 4, right: 0 }
    const resultantSpeed = { x: 0 , y: 0 }

    updateResultantSpeed(speedObj, resultantSpeed)

    expect(resultantSpeed).toEqual({ x: -4 , y: -4 })
  })

  it('gives takes negative directions away from positive ones', () => {
    const speedObj = { up: 6, left: 4, down: 2, right: 2 }
    const resultantSpeed = { x: 0 , y: 0 }

    updateResultantSpeed(speedObj, resultantSpeed)

    expect(resultantSpeed).toEqual({ x: -2 , y: 4 })
  })

  it('does not care about given resultantSpeed', () => {
    const speedObj = { up: 6, left: 4, down: 2, right: 2 }
    const resultantSpeed = { x: 892734 , y: 124097 }

    updateResultantSpeed(speedObj, resultantSpeed)

    expect(resultantSpeed).toEqual({ x: -2 , y: 4 })
  })
})