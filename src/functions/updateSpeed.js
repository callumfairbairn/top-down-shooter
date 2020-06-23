import {
  ACCELERATION,
  DECELERATION,
  getOppositeKey,
  MAX_SPEED,
  STARTUP_SPEED
} from '../constants'

export const updateSpeed = (speedObj, keyObj, keyPressedFirst) => {
  if (speedObj !== undefined) {
    Object.keys(keyObj).forEach(key => {
      const direction = keyToDirectionMap[key]
      const prevSpeed = speedObj[direction].toFixed(2)

      if (keyObj[key] === true) {
        if (keyObj[getOppositeKey[key]] === true) {
          if (keyPressedFirst[key]) {
            speedObj[direction] = prevSpeed <= 0.16 ? 0 : prevSpeed * DECELERATION
          }
        } else {
          speedObj[keyToDirectionMap[getOppositeKey[key]]] = 0
          updateSingleDirection(prevSpeed, speedObj, direction, STARTUP_SPEED)
        }
      }
      else {
        speedObj[direction] = prevSpeed <= 0.16 ? 0 : prevSpeed * DECELERATION
      }
    })
  }
}

const updateSingleDirection = (prevSpeed, speedObj, direction, startupSpeed) => {
  const newSpeed = prevSpeed * ACCELERATION + startupSpeed
  if (newSpeed > MAX_SPEED) {
    speedObj[direction] = MAX_SPEED
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
