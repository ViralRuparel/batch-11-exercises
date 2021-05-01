
export const chunkArrayInGroups = (arr, numbers) => {
    let result = [];
    while (arr.length){
        let tempArray = arr.splice(0,numbers)
        result.push(tempArray); 
    }
   return result;
}

