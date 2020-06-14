import React, { useEffect, useState } from 'react'

import './App.scss'
import { Canvas } from './components/Canvas'
import keyboard from 'keyboardjs'

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const keyObj = {
    w: false,
    a: false,
    s: false,
    d: false
  }

  const keyDownHandler = (key) => () => { keyObj[key] = true }
  const keyUpHandler = (key) => () => { keyObj[key] = false }

  Object.keys(keyObj).forEach(key => {
    keyboard.bind(key, keyDownHandler(key), keyUpHandler(key) )
  })

  const mouseMoveEventListener = (e) => {
    setMousePosition({ x: e.offsetX, y: e.offsetY })
  }

  useEffect(() => {
    const app = document.getElementById('app')
    app.addEventListener('mousemove', mouseMoveEventListener)
    return () => {
      window.removeEventListener('mousemove', mouseMoveEventListener)
      Object.keys(keyObj).forEach(key => {
        keyboard.unbind(key, keyDownHandler(key), keyUpHandler(key) )
      })
    }
  }, [])

  return (
    <div className='app' id='app'>
      <Canvas
        mousePosition={mousePosition}
        keyObj={keyObj}
      />
    </div>
  )
}

export default App
