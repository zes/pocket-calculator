import * as math from 'mathjs';

export const calculate = operation => {
  try {
    // math.format with precision 14 to fix round-off errors (http://mathjs.org/docs/datatypes/numbers.html)
    const stringResult = math.format(math.eval(operation), { precision: 15 });
    // 'Infinity' if division by zero
    if (stringResult === 'Infinity') {
      return 'ERROR';
    }
    // 'undefined' if operation is empty
    if (stringResult === 'undefined') {
      return '';
    }
    return stringResult;
  } catch (e) {
    return 'ERROR';
  }
};

export default { calculate };
