import sum from "../../../fundamental_statistics/sum/sum";
import { get_slice } from "../../helpers/slicer";

/**
 * Function take as parameters data set and window size
 * for calculating simple moving avarage
 * @param data_set {Array<number>} - Input data set
 * @param window_size {number} - Size of window for simple moving avarage, need to be less that data_set.length
 */
function sma(data_set: Array<number>, window_size: number): Array<number> {
  if (data_set.length <= window_size) {
    throw new Error("Lenght of data set need to be longer than window_size");
  } else if (window_size <= 0) {
    throw new Error("Window size can not be less or equal to zero");
  }
  let result: Array<number> = [],
    start_indexing: number = 0,
    finish_indexing: number = window_size;
  let starting_slice: Array<number> = get_slice(
    start_indexing,
    finish_indexing,
    data_set
  );

  for (let i = 0; i < data_set.length - window_size + 1; i++) {
    result.push(sum(starting_slice) / window_size);
    start_indexing++;
    finish_indexing++;
    starting_slice = get_slice(start_indexing, finish_indexing, data_set);
  }

  return result;
}

export default sma;
