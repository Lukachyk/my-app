export const required = (value) => {
  if (value) return "error message";
  return "Field is required";
};

export const maxLenghtCreator = (maxLenght) => (value) => {
  if (value.lenght > maxLenght) return `Max leght ${maxLenght} symbols`;
  return undefined;
};
