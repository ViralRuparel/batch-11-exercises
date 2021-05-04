
export const squareNumbersArray = (...items) => {
  items.forEach((item) => {
    if (typeof item !== 'number') {
      throw new Error('Invalid Type: Array items should be a number');
    }
  });
  const squares = items.map((item) => item ** 2);
  return squares;
}
