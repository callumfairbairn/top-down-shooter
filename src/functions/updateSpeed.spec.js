import { updateSpeed } from './updateSpeed'
import { ACCELERATION, DECELERATION, MAX_SPEED, STARTUP_SPEED } from '../constants'

describe('updateSpeed', () => {
  describe('when not moving', () => {
    it('does not break if speedObj is undefined', () => {
      const speedObj = undefined
      const keyObj = { w: false, a: false, s: false, d: false }
      const keyPressedObj = { w: false, a: false, s: false, d: false }

      updateSpeed(speedObj, keyObj, keyPressedObj)

      expect(true).toEqual(true)
    })

    it('speed stays at zero if no keys are pressed', () => {
      const speedObj = { up: 0, left: 0, down: 0, right: 0 }
      const keyObj = { w: false, a: false, s: false, d: false }
      const keyPressedObj = { w: false, a: false, s: false, d: false }

      updateSpeed(speedObj, keyObj, keyPressedObj)

      expect(speedObj).toEqual({ up: 0, left: 0, down: 0, right: 0 })
    })
  })

  describe('when decelerating', () => {
    it('speed decrements if no keys are pressed', () => {
      const speedObj = { up: MAX_SPEED, left: 0, down: 0, right: 0 }
      const keyObj = { w: false, a: false, s: false, d: false }
      const keyPressedObj = { w: false, a: false, s: false, d: false }

      updateSpeed(speedObj, keyObj, keyPressedObj)

      expect(speedObj).toEqual({ up: MAX_SPEED * DECELERATION, left: 0, down: 0, right: 0 })
    })

    it('speed goes to zero if less than MIN_SPEED', () => {
      const speedObj = { up: 0.15, left: 0, down: 0, right: 0 }
      const keyObj = { w: false, a: false, s: false, d: false }
      const keyPressedObj = { w: false, a: false, s: false, d: false }

      updateSpeed(speedObj, keyObj, keyPressedObj)

      expect(speedObj).toEqual({ up: 0, left: 0, down: 0, right: 0 })
    })
  })

  describe('when accelerating', () => {
    it('speed increases from zero to startup speed if key is pressed', () => {
      const speedObj = { up: 0, left: 0, down: 0, right: 0 }
      const keyObj = { w: true, a: false, s: false, d: false }
      const keyPressedObj = { w: true, a: false, s: false, d: false }

      updateSpeed(speedObj, keyObj, keyPressedObj)

      expect(speedObj).toEqual({ up: STARTUP_SPEED, left: 0, down: 0, right: 0 })
    })

    it('speed increases from initial value to startup speed if key is pressed', () => {
      const speedObj = { up: 1.5, left: 0, down: 0, right: 0 }
      const keyObj = { w: true, a: false, s: false, d: false }
      const keyPressedObj = { w: true, a: false, s: false, d: false }

      updateSpeed(speedObj, keyObj, keyPressedObj)

      expect(speedObj).toEqual({ up: 1.5 * ACCELERATION + STARTUP_SPEED, left: 0, down: 0, right: 0 })
    })

    it('cancels momentum of opposite direction when accelerating in new direction', () => {
      const speedObj = { up: 1.5, left: 0, down: 0, right: 0 }
      const keyObj = { w: false, a: false, s: true, d: false }
      const keyPressedObj = { w: false, a: false, s: true, d: false }

      updateSpeed(speedObj, keyObj, keyPressedObj)

      expect(speedObj).toEqual({ up: 0, left: 0, down: STARTUP_SPEED, right: 0 })
    })
  })

  describe('when multiple keys are pressed', () => {
    it('acts normally for perpendicular directions', () => {
      const speedObj = { up: 0, left: 0, down: 0, right: 0 }
      const keyObj = { w: true, a: true, s: false, d: false }
      const keyPressedObj = { w: true, a: true, s: false, d: false }

      updateSpeed(speedObj, keyObj, keyPressedObj)

      expect(speedObj).toEqual({ up: STARTUP_SPEED, left: STARTUP_SPEED, down: 0, right: 0 })
    })

    it('if opposite directions are held, should not increase speed', () => {
      const speedObj = { up: 0, left: 0, down: 0, right: 0 }
      const keyObj = { w: true, a: false, s: true, d: false }
      const keyPressedObj = { w: true, a: false, s: true, d: false }

      updateSpeed(speedObj, keyObj, keyPressedObj)

      expect(speedObj).toEqual({ up: 0, left: 0, down: 0, right: 0 })
    })

    it('if direction was held first then opposite is held, should decelerate original direction', () => {
      const speedObj = { up: MAX_SPEED, left: 0, down: 0, right: 0 }
      const keyObj = { w: true, a: false, s: true, d: false }
      const keyPressedObj = { w: true, a: false, s: false, d: false }

      updateSpeed(speedObj, keyObj, keyPressedObj)

      expect(speedObj).toEqual({ up: MAX_SPEED * DECELERATION, left: 0, down: 0, right: 0 })
    })
  })
})