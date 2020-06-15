export const updatePosition = (speedObj, setPosition) => {
  if (speedObj !== undefined) {
    setPosition(prevPosition => ({ x: prevPosition.x - speedObj.left, y: prevPosition.y }))
    setPosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y - speedObj.up }))
    setPosition(prevPosition => ({ x: prevPosition.x + speedObj.right, y: prevPosition.y }))
    setPosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y + speedObj.down }))
  }
}
