import mean from "../mean/mean";
import { sum } from "../../..";

export interface ILinearRegression {
  a: number;
  b: number;
  string_eq_represent: string;
  similarity_coefficient: number;
}

/**
 * Function takes as a parameters pair of numeric data sets
 * return specific object with next fields:
 * @returns {Object<a: number, b: number, string_eq_represent: string, similarity_coefficient: number>}
 * where a, b - pair that represents linear coefficients in equation y = a + bx
 * string_eq_represent - string representation of equation with calculated a and b
 * similarity_coefficient - quotient of sums, sum(y_data_set) / sum(y_regression_data_set)
 * @param x_data_set {Array<number>} - Numeric data set of x's
 * @param y_data_set {Array<number>} - Numeric data set of y's
 */
export function linear_regression(
  x_data_set: Array<number>,
  y_data_set: Array<number>
): ILinearRegression {
  if (x_data_set.length <= 1 || y_data_set.length <= 1)
    throw new Error("Data sets need to have more that 1 elements");
  if (x_data_set.length !== y_data_set.length)
    throw new Error("Data sets need to have equal sizes");

  let result: ILinearRegression = {} as ILinearRegression;

  const x_mean = mean(x_data_set),
    y_mean = mean(y_data_set),
    len: number = x_data_set.length,
    sum_of_y: number = sum(y_data_set);

  let sum_of_multiplication: number = 0,
    squared_sum_of_x: number = 0,
    b: number,
    a: number,
    test_sum_model: number = 0;

  for (let i = 0; i < len; i++) {
    sum_of_multiplication += x_data_set[i] * y_data_set[i];
    squared_sum_of_x = Math.pow(x_data_set[i], 2);
  }

  b =
    (len * sum_of_multiplication - x_mean * y_mean) /
    (len * squared_sum_of_x - Math.pow(x_mean, 2));
  a = y_mean - b * x_mean;

  for (let i = 0; i < len; i++) {
    test_sum_model += a + b * x_data_set[i];
  }

  result.a = a;
  result.b = b;
  result.string_eq_represent = `y_reg = ${a} + ${b} * x`;
  result.similarity_coefficient = sum_of_y / test_sum_model;

  return result;
}
