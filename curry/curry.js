export const curry = (action, ...args) => {
  if (action.length <= args.length) {
    return action(...args);
  }
  return (...more) => curry(action, ...args, ...more);
}
