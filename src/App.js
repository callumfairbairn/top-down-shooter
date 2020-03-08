import React, { useEffect, useState } from 'react'

import './App.scss'

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setEventListener(setMousePosition)
  }, [])

  return (
    <div className='app' id='app'>
      <div className='dot' />
      <svg className='line-container'>
        <line
          x1={`${window.innerWidth / 2 + 0.5}`}
          y1={`${window.innerHeight / 2 + 0.5}`}
          x2={`${mousePosition.x}`}
          y2={`${mousePosition.y}`}
          className='line'
        />
      </svg>
    </div>
  )
}

const setEventListener = (setMousePosition) => {
  const app = document.getElementById('app')

  app.addEventListener('mousemove', (e) => {
    setMousePosition({ x: e.offsetX, y: e.offsetY })
  })
}

export default App
