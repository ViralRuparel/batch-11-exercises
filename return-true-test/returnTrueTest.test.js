import { returnTrueTest } from './returnTrueTest';

describe('returnTrue', () => {
  test('should return true as a boolean', () => {
    expect(returnTrueTest(3)).toBe(true);
    expect(returnTrueTest(4)).toBeTruthy();
    expect(returnTrueTest('hey')).toBeFalsy();
  });
});
