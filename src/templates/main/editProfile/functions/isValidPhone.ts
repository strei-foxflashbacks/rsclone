const isValidPhone = (phone: string): boolean => {
  return phone === '' || phone.length >= 9;
};

export default isValidPhone;