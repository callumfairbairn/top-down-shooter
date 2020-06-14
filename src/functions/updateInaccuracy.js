import { maxSpeed, PI } from '../constants'

export const updateInaccuracy = (inaccuracyRef, resultantSpeed) => {
  const overallSpeed = (Math.abs(resultantSpeed.x) + Math.abs(resultantSpeed.y)) / 2
  const roundedOverallSpeed = overallSpeed.toFixed(2)
  if (overallSpeed > maxSpeed) {
    inaccuracyRef.current = PI / 32
  } else {
    inaccuracyRef.current = PI / 32 * roundedOverallSpeed
  }
}
