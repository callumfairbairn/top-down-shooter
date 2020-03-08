import { getPhi } from './getPhi'
import { getRadius } from './getRadius'
import { convertPixelsToCartesian } from './convertPixelsToCartesian'

export const convertPixelsToPolar = (location, borderSize) => {
  const cartesianLocation = convertPixelsToCartesian(location, borderSize)

  return { r: getRadius(cartesianLocation), phi: getPhi(cartesianLocation) }
}
