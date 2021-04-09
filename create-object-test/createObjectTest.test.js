import { createObject } from './createObjectTest';

describe('createObject', () => {
  test('should return an object with fname and lname as key with values as passed to function', () => {
    expect(createObject('anshu', 'rathee')).toEqual({ fname: 'anshu', lname: 'rathee' });
  });
});
