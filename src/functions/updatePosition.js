export const updatePosition = (speedRef, setPosition) => {
  if (speedRef.current !== undefined) {
    setPosition(prevPosition => ({ x: prevPosition.x - speedRef.current.a, y: prevPosition.y }))
    setPosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y - speedRef.current.w }))
    setPosition(prevPosition => ({ x: prevPosition.x + speedRef.current.d, y: prevPosition.y }))
    setPosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y +  speedRef.current.s }))
  }

}