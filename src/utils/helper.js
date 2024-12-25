export const currency = (values) => {
  const formattedNumber = values
    ? new Intl.NumberFormat().format(
        Number(values?.toString()?.replace(/,/g, ""))
      )
    : values;
  return formattedNumber;
};

export const toSentenceCase = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const camelCaseToSentence = (str) => {
  if (!str) return "";
  const result = str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());
  return result.trim();
};
