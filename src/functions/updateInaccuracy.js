import { maxSpeed, PI } from '../constants'

export const updateInaccuracy = (inaccuracyRef, speedRef) => {
  const overallSpeed = (speedRef.current[65] + speedRef.current[68] + speedRef.current[83] + speedRef.current[87]) / 4
  const roundedOverallSpeed = overallSpeed.toFixed(2)
  console.log(roundedOverallSpeed)
  if (overallSpeed > maxSpeed / 4) {
    inaccuracyRef.current = PI / 32 * maxSpeed / 4
  } else {
    inaccuracyRef.current = PI / 32 * roundedOverallSpeed
  }
}