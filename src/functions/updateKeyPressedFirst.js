import { OPPOSITE_KEY_MAP } from '../constants'

export const updateKeyPressedFirst = (keyObj, keyPressedFirst) => {
  Object.keys(keyObj).forEach(key => {
    if (keyObj[key] === false) {
      keyPressedFirst[key] = false
    } else {
      if (keyPressedFirst[OPPOSITE_KEY_MAP[key]] === false) {
        keyPressedFirst[key] = true
      }
    }
  })
}
