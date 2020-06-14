import { acceleration, deceleration, maxSpeed } from '../constants'

export const updateSpeed = (speedRef, keyObj) => {
  if (speedRef.current !== undefined) {
    Object.keys(speedRef.current).forEach(key => {
      const prevSpeed = speedRef.current[key]

      if (keyObj[key] === true) {
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
