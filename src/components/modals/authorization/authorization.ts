import createElement from '../../../helpers/createElement';
import handleUserAccountInput from './functions/handleUserAccountInput';
import handleClosing from './functions/handleClosing';
import closeModal from '../functions/closeModal';

const getAuthorizationModal = (): HTMLElement => {
  const container = createElement('div', { class: 'authorization modal' });
  const title = createElement('div', { class: 'authorization__title' }, 'Добро пожаловать!');
  const cross = createElement('img', { src: './assets/cross.svg', width: '30', height: '30', class: 'close' });

  title.append(cross);
  const innerContainer = createElement('div', { class: 'authorization__inner-container' });
  const text = createElement('p', { class: 'authorization__text' }, 'Введите телефон или e-mail и пароль');
  const form = createElement('form', { action: '#', class: 'authorization__form' });


  const inputEmail = createElement('input', { type: 'text', placeholder: 'vasyaPupkin@mail.com / (+)000000000', class: 'authorization__input', id: 'emailOrNumber', required: '' });
  inputEmail.setAttribute('pattern', '^\\+?\\d{9,}|[\\w-]{2,}@[a-z]{0,5}\\.[a-z]{2,5}$');
  const inputPassword = createElement('input', { type: 'password', placeholder: 'от 5 до 10 букв и символов \'_\' и \'-\'', class: 'authorization__input', id: 'password', required: '' });
  inputPassword.setAttribute('pattern', '^[\\w-]{5,10}$');
  const inputs = createElement('div', { class: 'authorization__inputs' });
  inputs.append(inputEmail, inputPassword);

  const buttons = createElement('div', { class: 'authorization__buttons' });
  const buttonLogIn = createElement('input', { type: 'submit', class: 'button authorization__button', id: 'logIn', value: 'Войти' });
  const buttonRegister = createElement('input', { type: 'submit', class: 'button authorization__button', id: 'register', value: 'Зарегистрироваться' });
  buttons.append(buttonRegister, buttonLogIn);

  form.append(inputs, buttons);
  innerContainer.append(text, form);
  container.append(title, innerContainer);

  cross.addEventListener('click', handleClosing);
  buttonRegister.addEventListener('click', handleUserAccountInput);
  form.addEventListener('submit', closeModal);
  buttonLogIn.addEventListener('click', handleUserAccountInput);
  return container;
};
export default getAuthorizationModal;
