import { returnAStringTest } from './returnAStringTest';

describe('returnAString', () => {
  test('should return a string', () => {
    expect(returnAStringTest('word')).toContain('word');
  });
});
