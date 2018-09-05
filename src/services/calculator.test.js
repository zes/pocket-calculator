import { calculate } from './calculator';

describe('[Service] Calculator', () => {
  describe('calculate', () => {
    [
      { expectedResult: '', operation: '' },
      { expectedResult: '47', operation: '1+46' },
      { expectedResult: '21', operation: '3*7' },
      { expectedResult: '139', operation: '1+46*3' },
      { expectedResult: '45.5', operation: '1+46-3/2' },
      { expectedResult: 'ERROR', operation: '78/0' },
      { expectedResult: 'ERROR', operation: '78*7-' },
    ].forEach(({ expectedResult, operation }) => {
      it(`${operation} should return ${expectedResult}`, () => {
        const result = calculate(operation);
        expect(result).toBe(expectedResult);
      });
    });
  });
});
