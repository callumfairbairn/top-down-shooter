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
  const polygonCoord1 = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi + PI / 32 }, screenSize)
  const polygonCoord2 = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi - PI / 32 }, screenSize)

  useEffect(() => {
    setEventListener(setMousePosition)
  }, [])

  return (
    <div className='app' id='app'>
      <div className='dot' />
      <svg className='line-container'>
        <line
          className='line'
          id='centre-line'
          x1={`${window.innerWidth / 2 + 0.5}`}
          y1={`${window.innerHeight / 2 + 0.5}`}
          x2={`${centreLineEnd.x}`}
          y2={`${centreLineEnd.y}`}
        />
        <polygon
          className='triangle'
          points={`
            ${window.innerWidth / 2 + 0.5},${window.innerHeight / 2 + 0.5}, 
            ${polygonCoord1.x},${polygonCoord1.y},
            ${polygonCoord2.x},${polygonCoord2.y},
          `}
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
