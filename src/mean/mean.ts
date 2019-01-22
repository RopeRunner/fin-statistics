import sum from "../sum/sum";

/**
 * Function takes as a parameter numerical data set
 * and returns algebraic average of these data set
 * @param data_set {Array<number>} - Numerical data set
 */
function mean(data_set: Array<number>): number {
  if (data_set.length === 0) return 0;

  return sum(data_set) / data_set.length;
}

export default mean;
