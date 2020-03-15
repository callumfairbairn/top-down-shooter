import {
  getBottomLeftBorderCoord,
  getBottomRightBorderCoord,
  getTopLeftBorderCoord, getTopRightBorderCoord
} from '../functions/Border/borderCoordinates'
import { borderInset } from '../constants'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { convertPixelsToPolar } from '../functions/PolarCoordinates/PixelsToPolar/convertPixelsToPolar'
import { convertPolarToPixels } from '../functions/PolarCoordinates/PolarToPixels/convertPolarToPixels'

export const Canvas = ({ mousePosition, inaccuracy }) => {
  const [position, setPosition] = useState({ x: 0 , y: 0 })
  const requestRef = useRef()
  const prevTimeRef = useRef()
  const keyDownRef = useRef()

  const keyDownEventListener = useCallback((e) => {
    keyDownRef.current = e.keyCode
  }, [])

  useEffect(() => {
      window.addEventListener('keydown', keyDownEventListener)
      return () => window.removeEventListener('keydown', keyDownEventListener)
  }, [keyDownEventListener])

  const screenSize = { x: window.innerWidth, y: window.innerHeight }
  const polarLocation = convertPixelsToPolar({ x: mousePosition.x, y: mousePosition.y }, screenSize)
  const maxRadius = Math.sqrt(Math.pow(screenSize.x, 2) + Math.pow(screenSize.y, 2))
  const centreLineEnd = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi }, screenSize)
  const polygonCoord1 = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi + inaccuracy }, screenSize)
  const polygonCoord2 = convertPolarToPixels({ r: maxRadius, phi: polarLocation.phi - inaccuracy }, screenSize)

  const update = (time) => {
    const deltaTime = time - prevTimeRef.current
    console.log(keyDownRef)
    if (prevTimeRef.current !== undefined) {
      if (keyDownRef.current !== undefined) {
        if (keyDownRef.current === 65) {
              setPosition(prevPosition => ({ x: prevPosition.x - deltaTime * 0.5, y: prevPosition.y }))
            } else if (keyDownRef.current === 87) {
              setPosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y - deltaTime * 0.5 }))
            } else if (keyDownRef.current === 68) {
              setPosition(prevPosition => ({ x: prevPosition.x + deltaTime * 0.5, y: prevPosition.y }))
            } else if (keyDownRef.current === 83) {
              setPosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y + deltaTime * 0.5 }))
            }
      }
    }
    prevTimeRef.current = time
    requestRef.current = requestAnimationFrame(update)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  return <svg className='line-container'>
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
}
