export const termRange = (value: string): number => {
  const parsedValue = parseInt(value);
  return parsedValue > 40 ? 40 : parsedValue;
};
