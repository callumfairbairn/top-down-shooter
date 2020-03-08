import { PI } from '../../../constants'

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
  return PI / 2 - Math.atan(cartesianLocation.y / cartesianLocation.x)
}

export const thirdQuadrantAngle = (cartesianLocation) => {
  return PI + Math.atan(cartesianLocation.x / cartesianLocation.y)
}

export const fourthQuadrantAngle = (cartesianLocation) => {
  return PI * 3 / 2 - Math.atan(cartesianLocation.y / cartesianLocation.x)
}
