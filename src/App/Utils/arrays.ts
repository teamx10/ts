export const isArrayOfNumber = (arr: (number | string)[]): arr is number[] => {
  return arr.every((value) => typeof value === 'number');
};
