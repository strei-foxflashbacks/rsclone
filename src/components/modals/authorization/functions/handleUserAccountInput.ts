
const handleUserAccountInput = () => {
  const emailOrNumberElem = document.querySelector('#emailOrNumber') as HTMLInputElement;
  const password = document.querySelector('#password') as HTMLInputElement;
  if (!emailOrNumberElem || !password) {
    throw new Error('emailOrNumberElem or password is not found');
  }
  const emailOrNumberValue = emailOrNumberElem.value;
  const passwordValue = password.value;

  console.log(emailOrNumberValue, passwordValue);

};
export default handleUserAccountInput;
