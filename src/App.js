import React, { useEffect, useState } from 'react'

import './App.scss'
import { Canvas } from './components/Canvas'
import { bindKeyHandlers, unbindKeyHandlers } from './functions/keyHandlers'

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const keyObj = {
    w: false,
    a: false,
    s: false,
    d: false,
    shift: false
  }

  const keyPressedFirst = {
    w: false,
    a: false,
    s: false,
    d: false
  }

  bindKeyHandlers(keyObj)

  const mouseMoveEventListener = (e) => {
    setMousePosition({ x: e.offsetX, y: e.offsetY })
  }

  useEffect(() => {
    const app = document.getElementById('app')
    app.addEventListener('mousemove', mouseMoveEventListener)
    return () => {
      window.removeEventListener('mousemove', mouseMoveEventListener)
      unbindKeyHandlers(keyObj)
    }
  }, [])

  return (
    <div className='app' id='app'>
      <Canvas
        mousePosition={mousePosition}
        keyObj={keyObj}
        keyPressedFirst={keyPressedFirst}
      />
    </div>
  )
}

export default App
