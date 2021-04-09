import {returnAFunctionTest} from './returnAFunctionTest';

describe('returnAFunction', () => {
  test('should return a Function', () => {
    expect( returnAFunctionTest ).toBeInstanceOf(Function);
  });
});
