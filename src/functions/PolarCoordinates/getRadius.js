export const getRadius = (cartesianLocation) => {
  return Math.sqrt(Math.pow(cartesianLocation.x, 2) + Math.pow(cartesianLocation.y, 2))
}