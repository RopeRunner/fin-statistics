import standart_moments from "../standart_moments/standart_moments";

/**
 * Function takes as a parameter numeric data set
 * and return kurtosis value (standartized fourth statical moment, or excess coefficient)
 * @param data_set {Array<number>} - Numeric data set
 */
function kurtosis(data_set: Array<number>): number {
  return standart_moments(data_set, 4);
}

export default kurtosis;
