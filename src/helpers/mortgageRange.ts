export const mortgageRange = (value: string): number => {
  const parsedValue = parseFloat(value);
  return parsedValue > 1_000_000 ? 1_000_000 : parsedValue;
};
