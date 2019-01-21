class ICount {
  public number_of_times: number;
  public value: number;

  constructor(value: number, number_of_times: number) {
    this.value = value;
    this.number_of_times = number_of_times;
  }

  public set_number_of_times() {
    this.number_of_times += this.number_of_times;
  }
}

function mode(data_set: Array<number>): any {
  if (data_set.length === 0) throw new Error("Data set can not be empty");

  let indexing: Array<ICount> = [],
    result: Array<number> = [];

  for (let i = 0; i < data_set.length; i++) {
    let bool: number = indexing.findIndex(
      (el: ICount, index: number): any => {
        if (el.value === data_set[i]) {
          return index;
        }
      }
    );

    if (bool !== -1) {
      indexing.push(new ICount(data_set[i], 1));
    } else {
      indexing[bool].set_number_of_times();
    }
  }
}

export default mode;
