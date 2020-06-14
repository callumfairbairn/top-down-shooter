export const updatePosition = (speedObj, setPosition) => {
  if (speedObj !== undefined) {
    setPosition(prevPosition => ({ x: prevPosition.x - speedObj.a, y: prevPosition.y }))
    setPosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y - speedObj.w }))
    setPosition(prevPosition => ({ x: prevPosition.x + speedObj.d, y: prevPosition.y }))
    setPosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y + speedObj.s }))
  }
}
