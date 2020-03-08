import React, { useEffect, useState } from 'react'

import './App.scss'
import { convertPixelsToPolar } from './functions/PolarCoordinates/PixelsToPolar/convertPixelsToPolar'
import { convertPolarToPixels } from './functions/PolarCoordinates/PolarToPixels/convertPolarToPixels'
import { PI } from './constants'

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const screenSize = { x: window.innerWidth, y: window.innerHeight }
  const polarLocation = convertPixelsToPolar({ x: mousePosition.x, y: mousePosition.y }, screenSize)
  const maxRadius = Math.sqrt(Math.pow(screenSize.x, 2), Math.pow(screenSize.y, 2))
  const centreLineEnd = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi }, screenSize)
  const lineEnd1 = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi + PI / 32 }, screenSize)
  const lineEnd2 = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi - PI / 32 }, screenSize)

  useEffect(() => {
    setEventListener(setMousePosition)
  }, [])

  return (
    <div className='app' id='app'>
      <div className='dot' />
      <svg className='line-container'>
        <line
          className='line'
          x1={`${window.innerWidth / 2 + 0.5}`}
          y1={`${window.innerHeight / 2 + 0.5}`}
          x2={`${centreLineEnd.x}`}
          y2={`${centreLineEnd.y}`}
        />
        <line
          className='line'
          x1={`${window.innerWidth / 2 + 0.5}`}
          y1={`${window.innerHeight / 2 + 0.5}`}
          x2={`${lineEnd1.x}`}
          y2={`${lineEnd1.y}`}
        />
        <line
          className='line'
          x1={`${window.innerWidth / 2 + 0.5}`}
          y1={`${window.innerHeight / 2 + 0.5}`}
          x2={`${lineEnd2.x}`}
          y2={`${lineEnd2.y}`}
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
