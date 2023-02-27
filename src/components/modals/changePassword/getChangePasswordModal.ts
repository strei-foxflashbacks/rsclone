import createElement from '../../../helpers/createElement';
import closeModal from '../functions/closeModal';
import setThemeStyles from '../../themes/functions/setThemeStyles';
import handleClosing from '../authorization/functions/handleClosing';
import { getUser, updateUser } from '../../../api/apiUsers';
import { UserUpdate } from '../../../types/User';

const getChangePasswordModal = (): HTMLElement => {
  const container = createElement('div', { class: 'change-password modal' });
  const title = createElement('div', { class: 'authorization__title' }, 'Сменить пароль');
  const cross = createElement('img', { src: '/assets/cross.svg', width: '30', height: '30', class: 'close' });

  title.append(cross);
  const innerContainer = createElement('div', { class: 'authorization__inner-container' });
  setThemeStyles(innerContainer);
  const text = createElement('p', { class: 'authorization__text' }, 'Введите старый и новый пароль.');
  const errorMsg = createElement('p', { class: 'authorization__error-message' }, 'Ошибка пароля, введите верный пароль');
  const form = createElement('form', { action: '#', class: 'authorization__form' });

  const inputNewPassword = <HTMLInputElement>createElement(
    'input',
    {
      type: 'password',
      placeholder: 'Новый пароль (от 5 до 10 букв и символов \'_\' и \'-\')',
      class: 'authorization__input',
      id: 'newPassword',
      required: '',
      pattern: '^[\\w-]{5,10}$',
    });
  const inputRepeatNewPassword = <HTMLInputElement>createElement(
    'input',
    {
      type: 'password',
      placeholder: 'Повторите новый пароль',
      class: 'authorization__input',
      id: 'repeatNewPassword',
      required: '',
      pattern: '^[\\w-]{5,10}$',
    },
  );

  const inputs = createElement('div', { class: 'authorization__inputs' });
  inputs.append(inputNewPassword, inputRepeatNewPassword);

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
  innerContainer.append(text, errorMsg, form);
  container.append(title, innerContainer);

  cross.addEventListener('click', handleClosing);
  form.addEventListener('submit', closeModal);
  buttonLogIn.addEventListener('click', async (e: Event) => {
    e.preventDefault();
    const user = await getUser();
    if (!user) {
      throw new Error("User data don't find");
    }

    if (inputNewPassword.value !== inputRepeatNewPassword.value) {
      inputRepeatNewPassword.classList.add('invalid');
      errorMsg.classList.add('active');
      return;
    }

    if (inputRepeatNewPassword.classList.contains('invalid'))
      inputRepeatNewPassword.classList.remove('invalid');
    if (errorMsg.classList.contains('active'))
      errorMsg.classList.remove('active');

    const newPassword: UserUpdate = {
      name: user.name,
      password: inputNewPassword.value,
    };
    await updateUser(newPassword);
    inputNewPassword.value = '';
    inputRepeatNewPassword.value = '';
    handleClosing(e);
  });
  return container;
};
export default getChangePasswordModal;
