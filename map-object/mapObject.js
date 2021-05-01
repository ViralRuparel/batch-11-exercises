
export  const mapObject = (mappedObject, objectFuntion) => {
   const returnObject = {};
   for(let key in mappedObject) {
     const result = objectFuntion(mappedObject[key]);
     returnObject[key] = result;
   }
   return returnObject;
}
