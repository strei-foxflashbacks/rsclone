import clearElement from '../../../helpers/clearElement';
import createElement from '../../../helpers/createElement';
import { User } from '../../../types/User';
import handlerChangePasswordBtn from './functions/handlerChangePasswordBtn';
import './_editProfile.scss';

const userData: User = {
  id: '21451443',
  name: 'User12314',
  email: 'qwerty@qwerty.qwe',
  password: '12345678',
  userpic: './assets/smallAvatar.svg',
  birthday: '',
  sex: null,
  phone: '',
  collection: {
    playlist: [],
    films: [],
    persons: [],
  },
};

export const renderEditProfilePage = async () => {
  const main = document.querySelector('main');
  if (!main) {
    throw new Error('main is not found!');
  }
  clearElement(main);

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
  image.src = userData.userpic;
  avatar.append(image);

  const form = createElement(
    'form', 
    { class: 'edit-profile__form', name: 'edit-profile' },
  );
  const inputName = createElement(
    'input', 
    { 
      class: 'edit-profile__form-input', 
      type: 'text', 
      placeholder: 'Ваш никнейм',
      value: userData.name, 
    }, 
  );
  const inputBirthday = createElement(
    'input', 
    { 
      class: 'edit-profile__form-input', 
      type: 'date', 
      placeholder: 'День рождения',
      value: userData.birthday,
    },
  );
  const inputEmail = createElement(
    'input', 
    { 
      class: 'edit-profile__form-input', 
      type: 'email', 
      placeholder: 'Ваш email', 
      readonly: 'true',
      value: userData.email, 
    }, 
  );
  const inputTelephone = createElement(
    'input', 
    { 
      class: 'edit-profile__form-input', 
      type: 'text', 
      placeholder: 'Ваш номер телефона', 
      value: userData.phone,
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
  inputMale.checked = userData.sex === 'Мужчина';
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
      checked: `${userData.sex === 'Женщина'}`, 
    },
  );
  inputFemale.checked = userData.sex === 'Женщина';
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
  form.append(inputName, inputBirthday, radioGender, inputEmail, inputTelephone, btnForm);
  editProfile.append(avatar, form);

  btnSave.addEventListener('click', ()=>{});
  btnPassword.addEventListener('click', handlerChangePasswordBtn);
  editProfilePage.append(navigation, title, editProfile);
  main.append(editProfilePage);
};