export const convertPolarToCartesian = (polarLocation) => {
  return {
    x: convertNegativeZero(Math.sin(polarLocation.phi).toFixed(10) * polarLocation.r),
    y: convertNegativeZero(Math.cos(polarLocation.phi).toFixed(10) * polarLocation.r)
  }
}

const convertNegativeZero = (number) => {
  return number === -0 ? 0 : number
}