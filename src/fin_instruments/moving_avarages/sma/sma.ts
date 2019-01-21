import sum from "../../../sum/sum";

function sma(
  data_set: Array<number>,
  window_size: number
): Array<number> | Error {
  if (data_set.length <= window_size) {
    return new Error("Lenght of data set need to be longer than window_size");
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

const get_slice = (start: number, end: number, arr: Array<number>) =>
  arr.slice(start, end);

export default sma;
