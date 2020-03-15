import {
  getBottomLeftBorderCoord,
  getBottomRightBorderCoord,
  getTopLeftBorderCoord, getTopRightBorderCoord
} from '../functions/Border/borderCoordinates'
import { borderInset } from '../constants'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { convertPixelsToPolar } from '../functions/PolarCoordinates/PixelsToPolar/convertPixelsToPolar'
import { convertPolarToPixels } from '../functions/PolarCoordinates/PolarToPixels/convertPolarToPixels'
import { useAnimationFrame } from '../functions/useAnimationFrame'
import { updateKeys } from '../functions/updateKeys'

export const Canvas = ({ mousePosition, inaccuracy }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const keyDownRef = useRef()
  const keyUpRef = useRef()
  const keysRef = useRef({
    65: false,
    87: false,
    68: false,
    83: false,
  })

  const keyDownEventListener = useCallback((e) => {
    keyDownRef.current = e.keyCode
  }, [])

  const keyUpEventListener = useCallback((e) => {
    keyUpRef.current = e.keyCode
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', keyDownEventListener)
    window.addEventListener('keyup', keyUpEventListener)
    return () => {
      window.removeEventListener('keydown', keyDownEventListener)
      window.removeEventListener('keyup', keyUpEventListener)
    }
  }, [keyDownEventListener, keyUpEventListener])

  const screenSize = { x: window.innerWidth, y: window.innerHeight }
  const polarLocation = convertPixelsToPolar({ x: mousePosition.x, y: mousePosition.y }, screenSize)
  const maxRadius = Math.sqrt(Math.pow(screenSize.x, 2) + Math.pow(screenSize.y, 2))
  const centreLineEnd = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi }, screenSize)
  const polygonCoord1 = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi + inaccuracy }, screenSize)
  const polygonCoord2 = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi - inaccuracy }, screenSize)

  useAnimationFrame(deltaTime => {
    updateKeys(keyDownRef, keyUpRef, keysRef)
    if (keysRef.current !== undefined) {
      if (keysRef.current[65]) {
        setPosition(prevPosition => ({ x: prevPosition.x - deltaTime * 0.5, y: prevPosition.y }))
      }
      if (keysRef.current[87]) {
        setPosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y - deltaTime * 0.5 }))
      }
      if (keysRef.current[68]) {
        setPosition(prevPosition => ({ x: prevPosition.x + deltaTime * 0.5, y: prevPosition.y }))
      }
      if (keysRef.current[83]) {
        setPosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y + deltaTime * 0.5 }))
      }
    }
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