
const handleUserAccountInput = () => {
  const emailElem = document.querySelector('#email') as HTMLInputElement;
  const password = document.querySelector('#password') as HTMLInputElement;
  if (!emailElem || !password) {
    throw new Error('emailElem or password is not found');
  }
  // const emailOrNumberValue = emailElem.value;
  // const passwordValue = password.value;
};
export default handleUserAccountInput;
