import { sumArrayTest } from './arraySumTest' 

describe('arraySum test', () => {
  test('should sum the array of numbers', () => {
    const fixture = [1, 2, 3, 4, 5];
    const sum = sumArrayTest(fixture);

    expect(sum).toEqual(15);
  });
});
