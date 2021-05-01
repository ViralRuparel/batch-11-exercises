
export const findElement = (arr, elements) => {
  
  for (let x of arr){
      if(elements(x)){
        return x;
      }
  }

}

