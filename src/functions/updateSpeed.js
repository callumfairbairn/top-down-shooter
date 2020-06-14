import { acceleration, deceleration, maxSpeed } from '../constants'

export const updateSpeed = (speedObj, keyObj) => {
  if (speedObj !== undefined) {
    Object.keys(speedObj).forEach(key => {
      const prevSpeed = speedObj[key]

      if (keyObj[key] === true) {
        const newSpeed = prevSpeed * acceleration + 0.5

        if (newSpeed > maxSpeed) {
          speedObj[key] = maxSpeed
        } else {
          speedObj[key] = newSpeed
        }
      } else {
        speedObj[key] = prevSpeed * deceleration
      }
    })
  }
}
