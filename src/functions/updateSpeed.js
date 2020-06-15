import {
  acceleration,
  deceleration,
  getOppositeKey,
  maxSpeed,
  quickDeceleration,
  slowStartupSpeed,
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
            speedObj[direction] = prevSpeed * quickDeceleration
          } else {
            updateSingleKey(prevSpeed, speedObj, direction, slowStartupSpeed)
          }
        } else {
          updateSingleKey(prevSpeed, speedObj, direction, startupSpeed)
        }
      } else {
        speedObj[direction] = prevSpeed * deceleration
      }
    })
  }
}

const updateSingleKey = (prevSpeed, speedObj, direction, startupSpeed) => {
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
