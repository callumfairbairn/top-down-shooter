import { getOppositeKey } from '../constants'

export const updateKeyPressedFirst = (keyObj, keyPressedFirst) => {
  Object.keys(keyObj).forEach(key => {
    if (keyObj[key] === false) {
      keyPressedFirst[key] = false
    } else {
      if (keyPressedFirst[getOppositeKey[key]] === false) {
        keyPressedFirst[key] = true
      }
    }
  })
}
