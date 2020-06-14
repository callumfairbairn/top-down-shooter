export const updateResultantSpeed = (speedRef, resultantSpeedRef) => {
  resultantSpeedRef.current.x = speedRef.current.d - speedRef.current.a
  resultantSpeedRef.current.y = speedRef.current.w - speedRef.current.s
}