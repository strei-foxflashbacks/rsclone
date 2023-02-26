import createElement from '../../../helpers/createElement';
import setThemeStyles from '../../themes/functions/setThemeStyles';
import { TextButtons } from '../authorization/authorization';
import handleClosing from '../authorization/functions/handleClosing';
import handleRegister from './handleRegister';

const getRegisterModal = () => {
  const container = createElement('div', { class: 'register modal' });
  const title = createElement('div', { class: 'authorization__title' }, 'Регистрация');
  const cross = createElement('img', { src: '/assets/cross.svg', width: '30', height: '30', class: 'close' });

  title.append(cross);
  const innerContainer = createElement('div', { class: 'authorization__inner-container' });
  setThemeStyles(innerContainer);
  const text = createElement('p', { class: 'authorization__text' }, 'Введите e-mail, никнейм и пароль');
  const errorMsg = createElement('p', { class: 'register__error-message' }, 'Ошибка регистрации, повторите попытку');
  const form = createElement('form', { action: '#', class: 'authorization__form' });
  
  const inputEmail = createElement(
    'input', 
    { 
      type: 'text', 
      placeholder: 'E-mail', 
      class: 'authorization__input', 
      id: 'register-email', 
      required: '', 
      pattern: '^[\\w\\-\\.]{1,}@[\\w]{1,}\\.[a-z]{2,}$',
    });
  const inputName = createElement(
    'input', 
    { 
      type: 'text', 
      placeholder: 'Никнейм', 
      class: 'authorization__input', 
      id: 'register-name', 
      required: '', 
    });
  const inputPassword = createElement(
    'input', 
    { 
      type: 'password', 
      placeholder: 'от 5 до 10 букв и символов \'_\' и \'-\'', 
      class: 'authorization__input', 
      id: 'register-password', 
      required: '',
      pattern: '^[\\w-]{5,10}$',
    });
  const inputs = createElement('div', { class: 'authorization__inputs' });
  inputs.append(inputEmail, inputName, inputPassword);

  const buttons = createElement('div', { class: 'authorization__buttons' });
  const buttonRegister = createElement('input', 
    { 
      type: 'submit', 
      class: 'button register__button', 
      id: 'register', 
      value: `${TextButtons.register}`, 
    });

  buttons.append(buttonRegister);

  form.append(inputs, buttons);
  innerContainer.append(text, errorMsg, form);
  container.append(title, innerContainer);

  cross.addEventListener('click', handleClosing);
  buttonRegister.addEventListener('click', handleRegister);
  return container;
};

export default getRegisterModal;