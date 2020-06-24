import { updatePosition } from './updatePosition'

describe('updatePosition', () => {
  it('does not fail when speedObj is undefined', () => {
    const speedObj = undefined
    let prevPosition = { x: 0 , y: 0 }
    const setPosition = (func) => { prevPosition = func(prevPosition) }

    updatePosition(speedObj, setPosition)

    expect(true).toEqual(true)
  })

  it('does not change position if speed is zero', () => {
    const speedObj = { up: 0, down: 0, left: 0, right: 0 }
    let prevPosition = { x: 0 , y: 0 }
    const setPosition = (func) => { prevPosition = func(prevPosition) }

    updatePosition(speedObj, setPosition)

    expect(prevPosition).toEqual({ x: 0 , y: 0 })
  })

  it('updates x coord if has speed in right direction', () => {
    const speedObj = { up: 0, down: 0, left: 0, right: 1 }
    let prevPosition = { x: 0 , y: 0 }
    const setPosition = (func) => { prevPosition = func(prevPosition) }

    updatePosition(speedObj, setPosition)

    expect(prevPosition).toEqual({ x: 1 , y: 0 })
  })

  it('negatively updates x coord if has speed in left direction', () => {
    const speedObj = { up: 0, down: 0, left: 5, right: 0 }
    let prevPosition = { x: 0 , y: 0 }
    const setPosition = (func) => { prevPosition = func(prevPosition) }

    updatePosition(speedObj, setPosition)

    expect(prevPosition).toEqual({ x: -5 , y: 0 })
  })

  it('updates y coord if has speed in down direction', () => {
    const speedObj = { up: 0, down: 12, left: 0, right: 0 }
    let prevPosition = { x: 0 , y: 0 }
    const setPosition = (func) => { prevPosition = func(prevPosition) }

    updatePosition(speedObj, setPosition)

    expect(prevPosition).toEqual({ x: 0 , y: 12 })
  })

  it('negatively updates y coord if has speed in up direction', () => {
    const speedObj = { up: 10, down: 0, left: 0, right: 0 }
    let prevPosition = { x: 0 , y: 0 }
    const setPosition = (func) => { prevPosition = func(prevPosition) }

    updatePosition(speedObj, setPosition)

    expect(prevPosition).toEqual({ x: 0 , y: -10 })
  })

  it('updates coords based on prevPosition', () => {
    const speedObj = { up: 0, down: 10, left: 0, right: 10 }
    let prevPosition = { x: 10 , y: 20 }
    const setPosition = (func) => { prevPosition = func(prevPosition) }

    updatePosition(speedObj, setPosition)

    expect(prevPosition).toEqual({ x: 20 , y: 30 })
  })
})