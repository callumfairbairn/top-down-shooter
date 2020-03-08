export const convertPixelsToCartesian = (location, screenSize) => {
  return {
    x: getCartesianX(location.x, screenSize.x),
    y: getCartesianY(location.y, screenSize.y)
  }
}

export const getCartesianX = (x, maxWidth) => {
  return x - maxWidth / 2
}

export const getCartesianY = (y, maxHeight) => {
  return maxHeight / 2 - y
}
