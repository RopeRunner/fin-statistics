/**
 * Simple function to calculate correlation for already calculated std values and covariance
 * @param covariance {number} - Numeric value, represent the covariance between correlating values
 * @param first_st_dev {number} - Numeric value, represent standart deviation of first set
 * @param second_st_dev {number} - Numeric value, represnt standart deviation of second set
 */
function simple_correlation(
  covariance: number,
  first_st_dev: number,
  second_st_dev: number
): number {
  if (first_st_dev === 0 || second_st_dev === 0)
    throw new Error("Standart deviations can not be equal to zero");

  return covariance / (first_st_dev * second_st_dev);
}

export default simple_correlation;
