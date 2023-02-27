import { getUser, updateUser } from '../../../api/apiUsers';
import router from '../../../components/router/router';
import clearElement from '../../../helpers/clearElement';
import createElement from '../../../helpers/createElement';
import { UserUpdate } from '../../../types/User';
import handlerChangePasswordBtn from './functions/handlerChangePasswordBtn';
import isValidDate from './functions/isValidDate';
import isValidPhone from './functions/isValidPhone';
import './_editProfile.scss';

export const renderEditProfilePage = async () => {
  const main = document.querySelector('main');
  if (!main) {
    throw new Error('main is not found!');
  }
  clearElement(main);
  const user = await getUser();
  if (!user) throw new Error("User data don't find");
  
  const editProfilePage = createElement('div', { class: 'edit-profile-page page' });

  const navigation = createElement('div', { class: 'navigation' });
  const elementNavigation = createElement(
    'a',
    { class: 'navigation__item', href: '#' },
    'Главная',
  );
  const elementNavigation2 = createElement(
    'a',
    { class: 'navigation__item', href: '#' },
    'Мой контент и профиль',
  );
  const elementNavigation3 = createElement(
    'a',
    { class: 'navigation__item', href: '#' },
    'Редактирование профиля',
  );
  navigation.append(elementNavigation, elementNavigation2, elementNavigation3);

  const title = createElement('h3', { class: 'edit-profile__title nav__title' }, 'ваш профиль');
  
  const editProfile = createElement('div', { class: 'edit-profile' });
  
  const avatar = createElement('div', { class: 'profile__avatar' });
  const image = <HTMLImageElement>(
    createElement('img', { class: 'profile__avatar-img', alt: 'User avatar' })
  );
  image.src = user.userpic || './assets/avatar.svg';
  avatar.append(image);

  const form = createElement(
    'form', 
    { class: 'edit-profile__form', name: 'edit-profile' },
  );
  const inputName = <HTMLInputElement>createElement(
    'input', 
    { 
      class: 'edit-profile__form-input', 
      type: 'text', 
      placeholder: 'Ваш никнейм',
      value: user.name, 
    }, 
  );
  const inputBirthday = <HTMLInputElement>createElement(
    'input', 
    { 
      class: 'edit-profile__form-input', 
      type: 'date', 
      placeholder: 'День рождения',
      value: user.birthday,
      min: '1900-01-01',
      max: '2023-01-01',
    },
  );
  const inputEmail = <HTMLInputElement>createElement(
    'input', 
    { 
      class: 'edit-profile__form-input', 
      type: 'email', 
      placeholder: 'Ваш email', 
      readonly: 'true',
      value: user.email, 
    }, 
  );
  const inputPhone = <HTMLInputElement>createElement(
    'input', 
    { 
      class: 'edit-profile__form-input', 
      type: 'tel', 
      placeholder: 'Ваш номер телефона', 
      value: user.phone,
      pattern: '\\+?[0-9\\s\\-\\(\\)]+',
    },    
  );
  const radioGender = createElement('div', { class: 'edit-profile__form-gender' });
  const inputMale = <HTMLInputElement>createElement(
    'input', 
    { 
      class: 'edit-profile__form-gender-radio', 
      type: 'radio', 
      id: 'male', 
      name: 'gender', 
      value: 'male', 
    },
  );
  inputMale.checked = user.sex === 'Мужчина';
  const labelMale = createElement(
    'label', 
    { 
      class: 'edit-profile__form-gender-label', 
      for: 'male', 
    }, 
    'Мужчина',
  );
  const inputFemale = <HTMLInputElement>createElement(
    'input', 
    { 
      class: 'edit-profile__form-gender-radio', 
      type: 'radio', 
      id: 'female',
      name: 'gender', 
      value: 'female', 
    },
  );
  inputFemale.checked = user.sex === 'Женщина';
  const labelFemale = createElement(
    'label', 
    { 
      class: 'edit-profile__form-gender-label', 
      for: 'female', 
    }, 
    'Женщина',
  );
  radioGender.append(inputMale, labelMale, inputFemale,  labelFemale);
  const btnForm = createElement('div', { class: 'edit-profile__form-buttons' });
  const btnSave = createElement(
    'button', 
    { class: 'edit-profile__form-btn button' }, 
    'Сохранить',
  );
  const btnPassword = createElement(
    'button', 
    { class: 'edit-profile__form-btn button' }, 
    'Сменить пароль',
  );
  btnForm.append(btnSave, btnPassword);
  form.append(inputName, inputBirthday, radioGender, inputEmail, inputPhone, btnForm);
  editProfile.append(avatar, form);

  const isNumber = (key: string) => /\d/.test(key);
  inputPhone.addEventListener('keydown', (e: KeyboardEvent) => {
    if (!(isNumber(e.key) || e.key === 'Backspace') 
        || (e.key !== 'Backspace' && inputPhone.value.length > 15)) {
      e.preventDefault();
    }
    if (isValidPhone(inputPhone.value)) inputPhone.classList.remove('invalid');
  });


  btnSave.addEventListener('click', async (e: Event) => {
    e.preventDefault();
    
    if (!isValidPhone(inputPhone.value)) {
      inputPhone.classList.add('invalid');
      return;
    }

    if (!(isValidDate(inputBirthday.value))) {
      inputBirthday.classList.add('invalid');
      return;
    }

    const newUserData: UserUpdate = {
      name: inputName.value,
      phone: inputPhone.value,
      birthday: inputBirthday.value,
      sex: inputFemale.checked ? 'Женщина' : inputMale.checked ? 'Мужчина' : null,
    };
    await updateUser(newUserData);
    router.navigateTo('/account');
  });
  btnPassword.addEventListener('click', (e: Event) => {
    e.preventDefault();
    handlerChangePasswordBtn();
  });
  editProfilePage.append(navigation, title, editProfile);
  main.append(editProfilePage);
};