export const requestValidator = (requestObject) => {
  const { method, uri, version, message } = requestObject;
  if (!['GET', 'POST', 'DELETE'].includes(method)) throw new Error('Invalid request header: Invalid Method');

  const URIPattern = /^\w+[\w.]+\w+$/gi;
  if (!URIPattern.test(uri) && uri !== '*') {
    throw new Error('Invalid request header: Invalid URI');
  }

  if (!['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(version)) throw new Error('Invalid request header: Invalid Version');

  const specialCharacters = /[<>\\&']/gi;
  if (!specialCharacters.test(message) && message !== '') throw new Error('Invalid request header: Invalid Message');

  return requestObject;
}