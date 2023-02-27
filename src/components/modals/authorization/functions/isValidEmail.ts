const isValidEmail = (email: string): boolean => {
  const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return !!email.match(mailFormat);
};

export default isValidEmail;