export const getPhi = (cartesianLocation) => {
  if (cartesianLocation.x >= 0) {
    if (cartesianLocation.y >= 0) {
      return firstQuadrantAngle(cartesianLocation)
    } else {
      return secondQuadrantAngle(cartesianLocation)
    }
  } else {
    if (cartesianLocation.y >= 0) {
      return fourthQuadrantAngle(cartesianLocation)
    } else {
      return thirdQuadrantAngle(cartesianLocation)
    }
  }
}

export const firstQuadrantAngle = (cartesianLocation) => {
  return Math.atan(cartesianLocation.x / cartesianLocation.y)
}

export const secondQuadrantAngle = (cartesianLocation) => {
  return Math.PI / 2 - Math.atan(cartesianLocation.y / cartesianLocation.x)
}

export const thirdQuadrantAngle = (cartesianLocation) => {
  return Math.PI + Math.atan(cartesianLocation.x / cartesianLocation.y)
}

export const fourthQuadrantAngle = (cartesianLocation) => {
  return Math.PI * 3 / 2 - Math.atan(cartesianLocation.y / cartesianLocation.x)
}
