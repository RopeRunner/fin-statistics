export interface ILinearRegression {
  a: number;
  b: number;
  string_eq_represent: string;
}

function linear_regression(
  first_data_set: Array<number>,
  second_data_set: Array<number>
): ILinearRegression {
  let result: ILinearRegression = {} as ILinearRegression;

  return result;
}

export default linear_regression;
