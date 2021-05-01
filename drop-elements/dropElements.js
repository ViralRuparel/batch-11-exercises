
export const dropElements = (arr, dropElement) => {
  let result =[];
  for (let x of arr){
      if(dropElement(x)){
        result.push(x);
      }
  }
  return result;
}

