import { loginUser } from '../../../../api/apiLogin';
import router from '../../../router/router';
import closeModal from '../../functions/closeModal';
import { saveTokenInLocalStorage } from './tokenInLocalStorage';

const handleLogin = async (e: Event, email: string, password: string) => {
  e.preventDefault();
  const emailElem = document.querySelector('#email') as HTMLInputElement;
  const passwordElem = document.querySelector('#password') as HTMLInputElement;
  const errorMsg = <HTMLElement>document.querySelector('.authorization__error-message');
  if (!emailElem || !passwordElem || !errorMsg) {
    throw new Error('emailElem or password is not found');
  }
  const response = await loginUser({ email, password });
    
  if (response.status === 200) {
    const token = await response.json();
    saveTokenInLocalStorage(token);
    closeModal();
    router.navigateTo(window.location.pathname);
  } else if ( response.status === 401) {
    errorMsg.classList.add('active');
  }

};
export default handleLogin;
