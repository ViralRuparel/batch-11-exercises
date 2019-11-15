
const flatten = (array) => array.reduce((flattened, element) => flattened.concat(element), []);

const searchSortedMatrix = (sortedMatrix) => {
  const { search, matrix } = sortedMatrix;
  return flatten(matrix).includes(search);
};


export {
  searchSortedMatrix,
};
