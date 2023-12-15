export const roundUpToNearest = (val: number, factor = 5) =>
  Math.ceil(val / factor) * factor;

export const roundDownToNearest = (val: number, factor = 5) =>
  Math.floor(val / factor) * factor;
