export const memoize = (cachedFunction) => {
  const memo = {};
  return (...args) => {
    if (!(args in memo)) {
      memo[args] = cachedFunction(...args);
    }
    return memo[args];
  };
}
