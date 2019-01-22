/**
 * Function takes as a parameters standart deviation and lgebraic avarage
 * return quadratic coefficient of variation
 * @param standart_deviation {number} - Numeric value, represent standart deviation
 * @param mean {number} - Numeric value, represent algebraic avarage value
 */
function quadratic_coefficient_of_variation(
  standart_deviation: number,
  mean: number
): number {
  if (mean === 0) throw new Error("Algebraic avarage can not be zero");

  return standart_deviation / mean;
}

export default quadratic_coefficient_of_variation;
