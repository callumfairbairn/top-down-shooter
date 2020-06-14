import keyboard from 'keyboardjs'

export const updateKeys = (keyObj) => {
  Object.keys(keyObj).forEach(key => {
    keyboard.bind(key, () => { keyObj[key] = true }, () => { keyObj[key] = false })
  })
}