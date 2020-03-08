import { PI } from '../constants'

export const getMaxRadius = (angle, screenSize) => {
  if (PI * 7 / 4 <= angle || angle < PI / 4) {
    return (screenSize.y / 2) / Math.cos(angle)
  } else if (PI / 4 <= angle && angle < PI) {
    return (screenSize.x / 2) / Math.sin(angle)
  } else if (PI / 2 <= angle && angle < PI * 3 / 2) {
    return -(screenSize.y / 2) / Math.cos(angle)
  }
  return -(screenSize.y / 2) / Math.sin(angle)
}
