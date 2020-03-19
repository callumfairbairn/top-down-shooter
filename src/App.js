import React, { useEffect, useState } from 'react'

import './App.scss'
import { Canvas } from './components/Canvas'

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const mouseMoveEventListener = (e) => {
    setMousePosition({ x: e.offsetX, y: e.offsetY })
  }

  useEffect(() => {
    const app = document.getElementById('app')
    app.addEventListener('mousemove', mouseMoveEventListener)
    return () => window.removeEventListener('mousemove', mouseMoveEventListener)
  }, [])

  return (
    <div className='app' id='app'>
      <Canvas
        mousePosition={mousePosition}
      />
    </div>
  )
}

export default App
