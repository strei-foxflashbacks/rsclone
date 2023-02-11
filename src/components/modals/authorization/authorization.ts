import createElement from '../../../helpers/createElement';
import closeModal from '../functions/closeModal';

const getAuthorizationModal = (): HTMLElement => {
  const container = createElement('div', { class: 'authorization modal' });
  const title = createElement('div', { class: 'authorization__title' }, 'Добро пожаловать!');
  const cross = createElement('img', { src: './assets/cross.svg', width: '30', height: '30', class: 'close' });

  title.append(cross);
  const innerContainer = createElement('div', { class: 'authorization__inner-container' });
  const text = createElement('p', { class: 'authorization__text' }, 'Введите телефон или e-mail и пароль');
  const form = createElement('form', { action: '#', class: 'authorization__form' });


  const inputEmail = createElement('input', { type: 'text', placeholder: 'E-mail', class: 'authorization__input' });
  const inputPassword = createElement('input', { type: 'password', placeholder: 'Пароль', class: 'authorization__input' });
  const inputs = createElement('div', { class: 'authorization__inputs' });
  inputs.append(inputEmail, inputPassword);

  const buttons = createElement('div', { class: 'authorization__buttons' });
  const buttonLogIn = createElement('button', { type: 'submit', class: 'button authorization__button' }, 'Войти');
  const buttonRegister = createElement('button', { type: 'submit', class: 'button authorization__button' }, 'Зарегистрироваться');
  buttons.append(buttonRegister, buttonLogIn);

  form.append(inputs, buttons);
  innerContainer.append(text, form);
  container.append(title, innerContainer);

  cross.addEventListener('click', closeModal);

  return container;
};
export default getAuthorizationModal;
