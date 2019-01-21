/**
 * Helper lambda, to avoid hardcoding
 * returns you specific part of an array
 * wrapper over slice method
 * @param start {number} - start of slicing
 * @param end {number} - end of slicing
 * @param arr {Array<any>} - array to apply
 */
export const get_slice = (start: number, end: number, arr: Array<any>) =>
  arr.slice(start, end);
