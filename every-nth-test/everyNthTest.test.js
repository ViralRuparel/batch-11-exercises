import { everyNthTest } from './everyNthTest';

describe('everyNth test', () => {
  test('should get every nth character in given string', () => {
    const actual = everyNthTest('iLoveJavaScript', 3);
    const expected = 'ivaSi';

    expect(actual).toEqual(expected);
  });
});
