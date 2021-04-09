/* eslint-disable */
import { getNameTest } from "./getNameTest";

describe('throwError test', () => {
  test('should return string with given name', () => {
    const actual = getNameTest('Martin Garrix');
    const expected = 'Martin Garrix';
    expect(actual).toMatch(expected);
  });

  test('should throw error if argument is not a string', () => {
    const expected = 'there was an error';
    expect(() => getNameTest(123)).toThrow(expected);
  });
});
