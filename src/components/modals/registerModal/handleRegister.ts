import { registerUser } from '../../../api/apiRegister';
import handleLogin from '../authorization/functions/handleLogin';
import isValidEmail from '../authorization/functions/isValidEmail';
import closeModal from '../functions/closeModal';

const handleRegister = async (e: Event) => {
  e.preventDefault();
  const target = <HTMLButtonElement>e.target;
  const emailElem = document.querySelector('#register-email') as HTMLInputElement;
  const nameElem = document.querySelector('#register-name') as HTMLInputElement;
  const passwordElem = document.querySelector('#register-password') as HTMLInputElement;  

  const errorMsg = <HTMLElement>document.querySelector('.register__error-message');
  if (!emailElem || !passwordElem || !nameElem || !errorMsg) {
    throw new Error('emailElem or password is not found');
  }

  const email = emailElem.value;
  const name = nameElem.value;
  const password = passwordElem.value;
  if (target.id === 'register' && isValidEmail(email) && (name.length > 2) && (password.length > 5)) {
    const response = await registerUser({
      email,
      name,
      password, 
    });
    if (response.status === 200) {
      await handleLogin(e, email, password);
      errorMsg.classList.remove('active');
      closeModal();
    } else {
      errorMsg.classList.add('active');
    }
  }
};

export default handleRegister;