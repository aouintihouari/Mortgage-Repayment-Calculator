export const isPositiveNumber = (input: string): boolean => {
  if (typeof input === "number") return input > 0;
  const parsed = parseFloat(input);
  return !isNaN(parsed) && isFinite(parsed) && parsed > 0;
};
