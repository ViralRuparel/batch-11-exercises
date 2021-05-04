export const alternatingCharacters = (strings) => {
  const deletions = [];
  strings.forEach((string) => {
    let repeated = 0;
    for (let i = 0; i < string.length - 1; i++) {
      if (string[i] === string[i + 1]) {
        repeated += 1;
      }
    }
    deletions.push(repeated);
  });
  return deletions;
}

