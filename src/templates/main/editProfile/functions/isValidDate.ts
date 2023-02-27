const isValidDate = (date: string): boolean => {
  return date === '' || (Date.parse(date) > Date.parse('1900-01-01') && Date.parse(date) < Date.parse('2023-01-01'));
};

export default isValidDate;