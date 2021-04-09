/* eslint-disable no-undef */

import { numberSumTest } from './numberSumTest';

describe('numberSum test', () => {
  test('should sum two numbers', () => {
    const actual = numberSumTest(2, 3);
    const expected = 5;

    expect(actual).toEqual(expected);
  });
});
