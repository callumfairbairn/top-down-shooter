import keyboard from 'keyboardjs'

const keyDownHandler = (key, keyObj) => () => { keyObj[key] = true }
const keyUpHandler = (key, keyObj) => () => { keyObj[key] = false }

export const bindKeyHandlers = (keyObj) => {
  Object.keys(keyObj).forEach(key => {
    keyboard.bind(key, keyDownHandler(key, keyObj), keyUpHandler(key, keyObj))
  })
}

export const unbindKeyHandlers = (keyObj) => {
  Object.keys(keyObj).forEach(key => {
    keyboard.unbind(key, keyDownHandler(key, keyObj), keyUpHandler(key, keyObj))
  })
}
