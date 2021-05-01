
export const objectInvert = (exchangeObj) => {
  let exchangedObj ={};
  Object.assign(exchangedObj, ...Object.entries(exchangeObj).map(([a,b]) => ({ [b]: a })))
  return exchangedObj;
}


