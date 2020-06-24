import {
  ACCELERATION,
  DECELERATION,
  OPPOSITE_KEY_MAP, MIN_SPEED,
  MAX_SPEED,
  STARTUP_SPEED, MAX_SPEED_SHIFT
} from '../constants'

export const updateSpeed = (speedObj, keyObj, keyPressedFirst) => {
  if (speedObj !== undefined) {
    Object.keys(keyObj).forEach(key => {
      if (key !== 'shift') {
        const direction = keyToDirectionMap[key]
        const prevSpeed = speedObj[direction].toFixed(2)

        if (keyObj[key] === true) {
          if (keyObj[OPPOSITE_KEY_MAP[key]] === true) {
            if (keyPressedFirst[key]) {
              speedObj[direction] = prevSpeed <= MIN_SPEED ? 0 : prevSpeed * DECELERATION
            }
          } else {
            speedObj[keyToDirectionMap[OPPOSITE_KEY_MAP[key]]] = 0
            updateSingleDirection(prevSpeed, speedObj, direction, STARTUP_SPEED, keyObj)
          }
        } else {
          speedObj[direction] = prevSpeed <= MIN_SPEED ? 0 : prevSpeed * DECELERATION
        }
      }
    })
  }
}

const updateSingleDirection = (prevSpeed, speedObj, direction, startupSpeed, keyObj) => {
  const maxSpeed = keyObj.shift ? MAX_SPEED_SHIFT : MAX_SPEED
  const newSpeed = prevSpeed * ACCELERATION + startupSpeed
  const currentSpeed = speedObj[direction]
  if (newSpeed > maxSpeed) {
    if (currentSpeed - maxSpeed < 0.1) {
      speedObj[direction] = maxSpeed
    } else {
      speedObj[direction] = currentSpeed * DECELERATION
    }
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
