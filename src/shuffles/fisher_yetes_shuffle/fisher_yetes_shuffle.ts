import random_range from "../../helpers/random_range/random_range";

/**
 * Implementation of Fisher-Yetes method
 * Function takes as a parameter data set - list, any type
 * and return random shuffle of given list
 * @param data_set {Array<any>} - List of data
 */
function fisher_yetes_shuffle(data_set: Array<any>): Array<any> {
  if (data_set.length <= 1)
    throw new Error("For shuffling need to have more than 1 element");

  let result: Array<any> = [];

  for (let i = 0; i < data_set.length; i++) {
    let j: number = random_range(0, i, true);
    result[i] = result[j];
    result[j] = data_set[i];
  }
  return result;
}

export default fisher_yetes_shuffle;
