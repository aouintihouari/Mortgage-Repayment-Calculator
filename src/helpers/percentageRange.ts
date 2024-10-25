export const percentageRange = (value: string): number => {
  const parsedValue = parseFloat(value);
  if (isNaN(parsedValue)) return 0;
  return parsedValue > 20 ? 20 : parsedValue;
};
