export const parseNumberFromFormattedString = (formatted: string): number => {
  return parseFloat(formatted.replace(/,/g, ""));
};
