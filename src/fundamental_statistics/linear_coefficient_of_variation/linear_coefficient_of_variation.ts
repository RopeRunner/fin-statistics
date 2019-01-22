/**
 * Function takes as a parameter avarage linear deviation and algebraic mean of data set
 * return the corresponding linear coefficient of variation
 * @param avarage_linear_deviation {number} - Numerical value, represent the avarage linear deviation
 * @param mean {number} - Numeric value, represent the algebraic mean of data set
 */
function linear_coefficient_of_variation(
  avarage_linear_deviation: number,
  mean: number
): number {
  if (mean === 0) throw new Error("Mean value can not be equal to zero");

  return avarage_linear_deviation / mean;
}

export default linear_coefficient_of_variation;
