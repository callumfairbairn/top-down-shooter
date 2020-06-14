export const updateResultantSpeed = (speedObj, resultantSpeed) => {
  resultantSpeed.x = speedObj.d - speedObj.a
  resultantSpeed.y = speedObj.w - speedObj.s
}
