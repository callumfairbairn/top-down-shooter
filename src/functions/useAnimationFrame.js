import { useEffect, useRef } from 'react'

export const useAnimationFrame = callback => {
  const requestRef = useRef()
  const prevTimeRef = useRef()

  const update = (time) => {
    const deltaTime = time - prevTimeRef.current
    if (prevTimeRef !== undefined) {
      callback(deltaTime)
    }
    prevTimeRef.current = time
    requestRef.current = requestAnimationFrame(update)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])
}
