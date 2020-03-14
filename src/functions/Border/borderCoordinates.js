export const getTopLeftBorderCoord = (inset, position) => {
  return `${0 + inset - position.x},${0 + inset - position.y}`
}

export const getBottomLeftBorderCoord = (inset, position, screenSize) => {
  return `${0 + inset - position.x},${0 - inset - position.y + screenSize.y}`
}

export const getBottomRightBorderCoord = (inset, position, screenSize) => {
  return `${0 - inset - position.x + screenSize.x},${0 - inset - position.y + screenSize.y}`
}

export const getTopRightBorderCoord = (inset, position, screenSize) => {
  return `${0 - inset - position.x + screenSize.x},${0 + inset - position.y}`
}
