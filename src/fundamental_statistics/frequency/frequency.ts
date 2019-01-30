/**
 * Function takes as a parameter numeric data set (list) and target element
 * and returns number of times that target appeared inside of data set
 * @param data_set {Array<number>} - List, to search in
 * @param target {number} - Element, you want search for
 */
function frequency(data_set: Array<number>, target: number): number {
  if (data_set.length < 1) throw new Error("Data set can not be empty");
  if (data_set.length === 1 || target === data_set[0]) return 1;
  if (data_set.indexOf(target) === -1) return 0;

  let result: number = 0;

  for (let i = 0; i < data_set.length; i++) {
    if (data_set[i] === target) result++;
  }

  return result;
}

export default frequency;
