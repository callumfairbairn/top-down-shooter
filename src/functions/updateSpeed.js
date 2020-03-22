import { acceleration, deceleration, maxSpeed } from '../constants'

export const updateSpeed = (keysRef, speedRef) => {
  if (speedRef.current !== undefined) {
    Object.keys(keysRef.current).forEach(key => {
      const prevSpeed = speedRef.current[key]

      if (keysRef.current[key] === true) {
        const newSpeed = prevSpeed * acceleration + 0.5

        if (newSpeed > maxSpeed) {
          speedRef.current[key] = maxSpeed
        } else {
          speedRef.current[key] = newSpeed
        }
      } else {
        speedRef.current[key] = prevSpeed * deceleration
      }
    })
  }
}