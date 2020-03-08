export const convertCartesianToPixels = (cartesianLocation, screenSize) => {
  return {
    x: Math.round(getPixelX(cartesianLocation.x, screenSize.x)),
    y: Math.round(getPixelY(cartesianLocation.y, screenSize.y))
  }
}

export const getPixelX = (cartesianX, screenWidth) => {
  return cartesianX + screenWidth / 2
}

export const getPixelY = (cartesianY, screenHeight) => {
  return screenHeight / 2 - cartesianY
}
