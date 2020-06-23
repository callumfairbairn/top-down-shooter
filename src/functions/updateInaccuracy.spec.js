import { updateInaccuracy } from './updateInaccuracy'
import { INACCURACY_MULTIPLIER, PI } from '../constants'

describe('updateInaccuracy', () => {
  it('updates to 0 if resultant speed is 0', () => {
    const inaccuracyRef = { current: 0 }
    const resultantSpeed = { x: 0 , y: 0 }

    updateInaccuracy(inaccuracyRef, resultantSpeed)

    expect(inaccuracyRef.current).toEqual(0)
  })

  it('works out average speed and multiplies by pi * multiplier to give inaccuracy', () => {
    const inaccuracyRef = { current: 0 }
    const resultantSpeed = { x: 2 , y: 2 }

    updateInaccuracy(inaccuracyRef, resultantSpeed)

    expect(inaccuracyRef.current).toEqual(2 * PI * INACCURACY_MULTIPLIER)
  })
})