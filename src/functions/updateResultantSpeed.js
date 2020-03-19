export const updateResultantSpeed = (speedRef, resultantSpeedRef) => {
  resultantSpeedRef.current.x = speedRef.current[68] - speedRef.current[65]
  resultantSpeedRef.current.y = speedRef.current[87] - speedRef.current[83]
}