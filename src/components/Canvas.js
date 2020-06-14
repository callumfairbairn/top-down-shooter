import {
  getBottomLeftBorderCoord,
  getBottomRightBorderCoord,
  getTopLeftBorderCoord,
  getTopRightBorderCoord
} from '../functions/Border/borderCoordinates'
import { borderInset } from '../constants'
import React, { useRef, useState } from 'react'
import { convertPixelsToPolar } from '../functions/PolarCoordinates/PixelsToPolar/convertPixelsToPolar'
import { convertPolarToPixels } from '../functions/PolarCoordinates/PolarToPixels/convertPolarToPixels'
import { useAnimationFrame } from '../functions/useAnimationFrame'
import { updateKeys } from '../functions/updateKeys'
import { updateSpeed } from '../functions/updateSpeed'
import { updateInaccuracy } from '../functions/updateInaccuracy'
import { updateResultantSpeed } from '../functions/updateResultantSpeed'
import { updatePosition } from '../functions/updatePosition'

export const Canvas = ({ mousePosition }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const keyObj = {
    w: false,
    a: false,
    s: false,
    d: false
  }
  const speedRef = useRef({
    w: 0,
    a: 0,
    s: 0,
    d: 0
  })
  const resultantSpeedRef = useRef({
    x: 0,
    y: 0
  })
  const inaccuracyRef = useRef(0)

  const screenSize = { x: window.innerWidth, y: window.innerHeight }
  const polarLocation = convertPixelsToPolar({ x: mousePosition.x, y: mousePosition.y }, screenSize)
  const maxRadius = Math.sqrt(Math.pow(screenSize.x, 2) + Math.pow(screenSize.y, 2))
  const centreLineEnd = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi }, screenSize)
  const polygonCoord1 = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi + inaccuracyRef.current }, screenSize)
  const polygonCoord2 = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi - inaccuracyRef.current }, screenSize)

  useAnimationFrame(() => {
    updateKeys(keyObj)
    updateSpeed(speedRef, keyObj)
    updateResultantSpeed(speedRef, resultantSpeedRef)
    updateInaccuracy(inaccuracyRef, resultantSpeedRef)
    updatePosition(speedRef, setPosition)
  })

  return <svg className='line-container'>
    <circle className='dot' cx={`${window.innerWidth / 2 + 0.5}`} cy={`${window.innerHeight / 2 + 0.5}`} r='3'/>
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
}
