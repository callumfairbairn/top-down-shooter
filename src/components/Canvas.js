import {
  getBottomLeftBorderCoord,
  getBottomRightBorderCoord,
  getTopLeftBorderCoord,
  getTopRightBorderCoord
} from '../functions/Border/borderCoordinates'
import { BORDER_INSET } from '../constants'
import React, { useRef, useState } from 'react'
import { convertPixelsToPolar } from '../functions/PolarCoordinates/PixelsToPolar/convertPixelsToPolar'
import { convertPolarToPixels } from '../functions/PolarCoordinates/PolarToPixels/convertPolarToPixels'
import { useAnimationFrame } from '../functions/useAnimationFrame'
import { updateSpeed } from '../functions/updateSpeed'
import { updateInaccuracy } from '../functions/updateInaccuracy'
import { updateResultantSpeed } from '../functions/updateResultantSpeed'
import { updatePosition } from '../functions/updatePosition'
import { updateKeyPressedFirst } from '../functions/updateKeyPressedFirst'

export const Canvas = ({ mousePosition, keyObj, keyPressedFirst }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const speedObj = {
    up: 0,
    left: 0,
    down: 0,
    right: 0
  }
  const resultantSpeed = {
    x: 0,
    y: 0
  }
  const inaccuracyRef = useRef(0)

  useAnimationFrame(() => {
    updateKeyPressedFirst(keyObj, keyPressedFirst)
    updateSpeed(speedObj, keyObj, keyPressedFirst)
    updateResultantSpeed(speedObj, resultantSpeed)
    updateInaccuracy(inaccuracyRef, resultantSpeed)
    updatePosition(speedObj, setPosition)
  })

  const screenSize = { x: window.innerWidth, y: window.innerHeight }
  const polarLocation = convertPixelsToPolar({ x: mousePosition.x, y: mousePosition.y }, screenSize)
  const maxRadius = Math.sqrt(Math.pow(screenSize.x, 2) + Math.pow(screenSize.y, 2))
  const centreLineEnd = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi }, screenSize)
  const polygonCoord1 = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi + inaccuracyRef.current }, screenSize)
  const polygonCoord2 = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi - inaccuracyRef.current }, screenSize)

  return (
    <svg className='line-container'>
      <circle className='dot' cx={`${window.innerWidth / 2 + 0.5}`} cy={`${window.innerHeight / 2 + 0.5}`} r='3' />
      <polygon
        className='polygon' id='border'
        points={`${getTopLeftBorderCoord(BORDER_INSET, position)} ${getBottomLeftBorderCoord(BORDER_INSET, position, screenSize)} ${getBottomRightBorderCoord(BORDER_INSET, position, screenSize)} ${getTopRightBorderCoord(BORDER_INSET, position, screenSize)}`}
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
  )
}
