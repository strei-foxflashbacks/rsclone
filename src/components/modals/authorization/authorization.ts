import createElement from '../../../helpers/createElement';
import closeModal from '../functions/closeModal';

const getAuthorizationModal = (): HTMLElement => {
  const container = createElement('div', { class: 'authorization modal' });
  const title = createElement('div', { class: 'authorization__title' }, 'Добро пожаловать!');
  const text = createElement('p', { class: 'authorization__text' }, 'Введите e-mail и пароль');
  const form = createElement('form', { action: '#', class: 'authorization__input' });
  const inputEmail = createElement('input', { type: 'email', placeholder: 'E-mail' });
  const inputPassword = createElement('input', { type: 'password', placeholder: 'Пароль', class: '' });
  const buttonLogIn = createElement('button', { type: 'submit', class: 'button authorization__button' }, 'Войти');
  const buttonRegister = createElement('button', { type: 'submit', class: 'button authorization__button' }, 'Зарегистрироваться');

  form.append(inputEmail, inputPassword, buttonRegister, buttonLogIn);
  const cross = createElement('img', { src: './assets/cross.svg', width: '30', height: '30', class: 'close' });
  container.append(title, text, form, cross);

  cross.addEventListener('click', closeModal);

  return container;
};
export default getAuthorizationModal;
