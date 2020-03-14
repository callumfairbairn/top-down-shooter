import React, { useEffect, useState, useCallback } from 'react'

import './App.scss'
import { convertPixelsToPolar } from './functions/PolarCoordinates/PixelsToPolar/convertPixelsToPolar'
import { convertPolarToPixels } from './functions/PolarCoordinates/PolarToPixels/convertPolarToPixels'
import { borderInset, PI } from './constants'
import {
  getBottomLeftBorderCoord,
  getBottomRightBorderCoord,
  getTopLeftBorderCoord, getTopRightBorderCoord
} from './functions/Border/borderCoordinates'

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [inaccuracy, setInaccuracy] = useState(PI / 32)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const screenSize = { x: window.innerWidth, y: window.innerHeight }
  const polarLocation = convertPixelsToPolar({ x: mousePosition.x, y: mousePosition.y }, screenSize)
  const maxRadius = Math.sqrt(Math.pow(screenSize.x, 2) + Math.pow(screenSize.y, 2))
  const centreLineEnd = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi }, screenSize)
  const polygonCoord1 = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi + inaccuracy }, screenSize)
  const polygonCoord2 = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi - inaccuracy }, screenSize)

  const mouseMoveEventListener = (e) => {
    setMousePosition({ x: e.offsetX, y: e.offsetY })
  }

  useEffect(() => {
    const app = document.getElementById('app')
    app.addEventListener('mousemove', mouseMoveEventListener)
  }, [])

  const keyDownEventListener = useCallback((e) => {
    if (e.keyCode === 65) {
      setPosition({ x: position.x - 6, y: position.y })
    } else if (e.keyCode === 87) {
      setPosition({ x: position.x, y: position.y - 6 })
    } else if (e.keyCode === 68) {
      setPosition({ x: position.x + 6, y: position.y })
    } else if (e.keyCode === 83) {
      setPosition({ x: position.x, y: position.y + 6 })
    }
  }, [position])

  useEffect(() => {
    window.addEventListener('keydown', keyDownEventListener)
    return () => window.removeEventListener('keydown', keyDownEventListener)
  }, [keyDownEventListener])

  return (
    <div className='app' id='app'>
      <svg className='line-container'>
        <circle className='dot' cx={`${window.innerWidth / 2 + 0.5}`} cy={`${window.innerHeight / 2 + 0.5}`} r='3' />
        <polygon
          className='polygon' id='border'
          points={`${getTopLeftBorderCoord(borderInset, position)} ${getBottomLeftBorderCoord(borderInset, position, screenSize)} ${getBottomRightBorderCoord(borderInset, position, screenSize)} ${getTopRightBorderCoord(borderInset, position, screenSize)}`}
        />
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
          points={`${window.innerWidth / 2 + 0.5},${window.innerHeight / 2 + 0.5} ${polygonCoord1.x},${polygonCoord1.y} ${polygonCoord2.x},${polygonCoord2.y}`}
        />
      </svg>
    </div>
  )
}

export default App
