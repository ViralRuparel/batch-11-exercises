/* eslint-disable linebreak-style */

import { yourName } from './yourName';

describe('write yourName in the test', () => {
  test('yourName should return my name', () => {
    expect(yourName()).toBe('Devansh');
  });
});