import { calculate, getFinancialNumber } from './calculator';

describe('[Service] Calculator', () => {
  describe('getFinancialNumber', () => {
    [
      { expectedResult: '47.00', value: '47' },
      { expectedResult: '45.50', value: '45.5' },
      { expectedResult: '45.80', value: '45.798' },
    ].forEach(({ expectedResult, value }) => {
      it(`with ${value} should return ${expectedResult}`, () => {
        const result = getFinancialNumber(value);
        expect(result).toBe(expectedResult);
      });
    });
  });

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
