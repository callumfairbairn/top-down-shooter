import { acceleration, deceleration, maxSpeed } from '../constants'

export const updateSpeed = (speedObj, keyObj) => {
  if (speedObj !== undefined) {
    Object.keys(keyObj).forEach(key => {
      const direction = keyToDirectionMap[key]
      const prevSpeed = speedObj[direction]

      if (keyObj[key] === true) {
        const newSpeed = prevSpeed * acceleration + 0.5

        if (newSpeed > maxSpeed) {
          speedObj[direction] = maxSpeed
        } else {
          speedObj[direction] = newSpeed
        }
      } else {
        speedObj[direction] = prevSpeed * deceleration
      }
    })
  }
}

const keyToDirectionMap = {
  w: 'up',
  a: 'left',
  s: 'down',
  d: 'right'
}
