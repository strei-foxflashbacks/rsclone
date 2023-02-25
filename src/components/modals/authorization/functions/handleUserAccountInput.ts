import { loginUser } from '../../../../api/apiLogin';
import { registerUser } from '../../../../api/apiRegister';
import handleLogInButton from '../../../../templates/header/functions/handleLogInButton';
import closeModal from '../../functions/closeModal';
import isValidEmail from './isValidEmail';

const handleUserAccountInput = async (e: Event) => {
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
    if (response.redirected) {
      closeModal();
      handleLogInButton();
    } else {
      errorMsg.classList.add('active');
    }
  } else if (target.id === 'logIn') {
    console.log('login');    
    await loginUser({ email, password });
  }
};
export default handleUserAccountInput;
