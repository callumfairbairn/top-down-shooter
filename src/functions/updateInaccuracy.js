import { INACCURACY_MULTIPLIER, PI } from '../constants'

export const updateInaccuracy = (inaccuracyRef, resultantSpeed) => {
  const overallSpeed = (Math.abs(resultantSpeed.x) + Math.abs(resultantSpeed.y)) / 2
  const roundedOverallSpeed = overallSpeed.toFixed(2)
  inaccuracyRef.current = PI * INACCURACY_MULTIPLIER * roundedOverallSpeed
}
