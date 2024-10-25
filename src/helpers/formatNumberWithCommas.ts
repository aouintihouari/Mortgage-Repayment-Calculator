export const formatNumberWithCommas = (num: number): string => {
  return new Intl.NumberFormat("en-US").format(num);
};
