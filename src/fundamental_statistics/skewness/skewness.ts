import standart_moments from "../standart_moments/standart_moments";

/**
 * Function takes as a parameter numeric data set
 * and return skewness value (standartized third statistical moment, or asymmetry coefficient)
 * @param data_set {Array<number>} - Numeric data set
 */
function skewness(data_set: Array<number>): number {
  return standart_moments(data_set, 3);
}

export default skewness;
