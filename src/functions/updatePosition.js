export const updatePosition = (speedObj, setPosition) => {
  if (speedObj !== undefined) {
    // setPosition takes a function in order to stop four separate re-renders
    setPosition(prevPosition => ({ x: prevPosition.x - speedObj.left, y: prevPosition.y }))
    setPosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y - speedObj.up }))
    setPosition(prevPosition => ({ x: prevPosition.x + speedObj.right, y: prevPosition.y }))
    setPosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y + speedObj.down }))
  }
}
