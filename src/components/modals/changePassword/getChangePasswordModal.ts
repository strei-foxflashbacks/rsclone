import createElement from '../../../helpers/createElement';
import closeModal from '../functions/closeModal';
import setThemeStyles from '../../themes/functions/setThemeStyles';
import handleClosing from '../authorization/functions/handleClosing';

const getChangePasswordModal = (): HTMLElement => {
  const container = createElement('div', { class: 'change-password modal' });
  const title = createElement('div', { class: 'authorization__title' }, 'Сменить пароль');
  const cross = createElement('img', { src: '/assets/cross.svg', width: '30', height: '30', class: 'close' });

  title.append(cross);
  const innerContainer = createElement('div', { class: 'authorization__inner-container' });
  setThemeStyles(innerContainer);
  const text = createElement('p', { class: 'authorization__text' }, 'Введите старый и новый пароль.');
  const form = createElement('form', { action: '#', class: 'authorization__form' });

  const inputCurrentPassword = createElement(
    'input', 
    { 
      type: 'password', 
      placeholder: 'Текущий пароль', 
      class: 'authorization__input', 
      id: 'oldPassword', 
      required: '', 
      pattern: '^[\\w-]{5,10}$',
    },
  );
  const inputNewPassword = createElement(
    'input', 
    { 
      type: 'password', 
      placeholder: 'Новый пароль (от 5 до 10 букв и символов \'_\' и \'-\')', 
      class: 'authorization__input', 
      id: 'newPassword', 
      required: '', 
      pattern: '^[\\w-]{5,10}$',
    });
  const inputs = createElement('div', { class: 'authorization__inputs' });
  inputs.append(inputCurrentPassword, inputNewPassword);

  const buttons = createElement('div', { class: 'authorization__buttons' });
  const buttonLogIn = createElement(
    'input', 
    { 
      type: 'submit', 
      class: 'button authorization__button', 
      id: 'updatePassword', 
      value: 'Обновить', 
    },
  );
  buttons.append(buttonLogIn);

  form.append(inputs, buttons);
  innerContainer.append(text, form);
  container.append(title, innerContainer);

  cross.addEventListener('click', handleClosing);
  form.addEventListener('submit', closeModal);
  buttonLogIn.addEventListener('click', ()=>{});
  return container;
};
export default getChangePasswordModal;
