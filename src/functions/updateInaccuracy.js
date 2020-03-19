import { maxSpeed, PI } from '../constants'

export const updateInaccuracy = (inaccuracyRef, resultantSpeedRef) => {
  const overallSpeed = (Math.abs(resultantSpeedRef.current.x) + Math.abs(resultantSpeedRef.current.y)) / 2
  const roundedOverallSpeed = overallSpeed.toFixed(2)
  if (overallSpeed > maxSpeed) {
    inaccuracyRef.current = PI / 32
  } else {
    inaccuracyRef.current = PI / 32 * roundedOverallSpeed
  }
}