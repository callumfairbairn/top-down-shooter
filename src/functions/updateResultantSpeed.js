export const updateResultantSpeed = (speedObj, resultantSpeed) => {
  resultantSpeed.x = speedObj.right - speedObj.left
  resultantSpeed.y = speedObj.up - speedObj.right
}
