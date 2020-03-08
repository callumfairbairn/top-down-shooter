import { convertPolarToCartesian } from './convertPolarToCartesian'
import { convertCartesianToPixels } from './convertCartesianToPixels'

export const convertPolarToPixels = (polarLocation, screenSize) => {
  return convertCartesianToPixels(convertPolarToCartesian(polarLocation), screenSize)
}
