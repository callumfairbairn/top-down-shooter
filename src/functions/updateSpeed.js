import { acceleration, maxSpeed } from '../constants'

export const updateSpeed = (keysRef, speedRef) => {
  if (speedRef.current !== undefined) {
    Object.keys(keysRef.current).forEach(key => {
      const prevSpeed = speedRef.current[key]
      if (keysRef.current[key] === true) {
        speedRef.current[key] = maxSpeed
      } else {
        speedRef.current[key] = prevSpeed * acceleration
      }
    })
  }
}