import {
  acceleration,
  deceleration,
  getOppositeKey,
  maxSpeed,
  startupSpeed
} from '../constants'

export const updateSpeed = (speedObj, keyObj, keyPressedFirst) => {
  if (speedObj !== undefined) {
    Object.keys(keyObj).forEach(key => {
      const direction = keyToDirectionMap[key]
      const prevSpeed = speedObj[direction].toFixed(2)

      if (keyObj[key] === true) {
        if (keyObj[getOppositeKey[key]] === true) {
          if (keyPressedFirst[key]) {
            speedObj[direction] = prevSpeed <= 0.16 ? 0 : prevSpeed * deceleration
          }
        } else {
          speedObj[keyToDirectionMap[getOppositeKey[key]]] = 0
          updateSingleDirection(prevSpeed, speedObj, direction, startupSpeed)
        }
      }
      else {
        speedObj[direction] = prevSpeed <= 0.16 ? 0 : prevSpeed * deceleration
      }
    })
  }
}

const updateSingleDirection = (prevSpeed, speedObj, direction, startupSpeed) => {
  const newSpeed = prevSpeed * acceleration + startupSpeed
  if (newSpeed > maxSpeed) {
    speedObj[direction] = maxSpeed
  } else {
    speedObj[direction] = newSpeed
  }
}

const keyToDirectionMap = {
  w: 'up',
  a: 'left',
  s: 'down',
  d: 'right'
}
