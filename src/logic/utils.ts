export const roundUpToNearest = (val: number, factor = 5) =>
  Math.ceil(val / factor) * factor;

export const roundDownToNearest = (val: number, factor = 5) =>
  Math.floor(val / factor) * factor;

export const roundToDecimal = (value: number, dp: number): number => {
  const multiplier = 10 ** dp;
  return Math.round(value * multiplier) / multiplier;
};

export const applyDiscount = (price: number, discount: number) =>
  roundToDecimal(price - price * (discount / 100), 2);
