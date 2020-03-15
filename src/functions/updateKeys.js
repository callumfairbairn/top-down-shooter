export const updateKeys = (keyDownRef, keyUpRef, keysRef) => {
  Object.keys(keysRef.current).forEach(key => {
    if (keyDownRef.current === parseInt(key)) {
      keysRef.current[key] = true
      keyDownRef.current = null
    }
    if (keyUpRef.current === parseInt(key)) {
      console.log('l')
      keysRef.current[key] = false
      keyUpRef.current = null
    }
  })
}