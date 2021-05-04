 
import { squareNumbersArray } from './squareNumbersArray';

describe('squareNumbersArray', () => {
  test('should throw an error if array of numbers is not passed as argument', () => {
    const myArray = [1, 2, 'string', 4];
    expect(() => squareNumbersArray(...myArray)).toThrow('Invalid Type: Array items should be a number');
  });
  test('should return square array', () => {
    const myArray2 = [1, 2, 3, 4];
    expect(squareNumbersArray(...myArray2)).toEqual([1, 4, 9, 16]);
  });
});