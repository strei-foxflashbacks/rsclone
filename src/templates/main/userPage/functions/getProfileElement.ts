import { getUser } from '../../../../api/apiUsers';
import createElement from '../../../../helpers/createElement';
import handleLogoutButton from '../../../header/functions/handleLogoutButton';
import { renderEditProfilePage } from '../../editProfile/editProfile';

export const getProfileElement = async (): Promise<HTMLElement> => {
  const user = await getUser();
  if (!user) throw new Error("User data don't find");
  const profileContainer = createElement('div', {
    class: 'profile-container',
  });

  const avatar = createElement('div', { class: 'profile__avatar' });
  const image = <HTMLImageElement>(
    createElement('img', { class: 'profile__avatar-img', alt: 'User avatar' })
  );
  image.src = user.userpic || './assets/avatar.svg';
  avatar.append(image);
  const userName = createElement(
    'div',
    { class: 'profile__name' },
    `${user.name}`,
  );
  const btnEditProfile = createElement('button', { class: 'profile__edit' });
  btnEditProfile.addEventListener('click', renderEditProfilePage);

  userName.append(btnEditProfile);
  const userId = createElement(
    'div',
    { class: 'profile__id' },
    `Ваш идентификатор: ${user.id}`,
  );
  const userKey = createElement(
    'div',
    { class: 'profile__key' },
    `Ключ переноса: ${user.id}`,
  );
  const userEmail = createElement(
    'div',
    { class: 'profile__email' },
    `Ваш e-mail: ${user.email}`,
  );

  const bottomContainer = createElement('div', { class: 'profile__bottom' });
  const devices = createElement(
    'button',
    { class: 'profile__bottom-btn profile__devices button' },
    'Мои устройства',
  );
  const imgDevices = createElement('img', {
    class: 'profile__bottom-img',
    src: './assets/device-list.png',
    alt: 'device img',
  });
  devices.prepend(imgDevices);
  const logout = createElement(
    'button',
    { class: 'profile__bottom-btn profile__logout' },
    'Выход из аккаунта',
  );
  const imgLogout = createElement('img', {
    class: 'profile__bottom-img',
    src: './assets/logout-icon.png',
    alt: 'logout img',
  });
  logout.prepend(imgLogout);
  logout.classList.add('button');
  bottomContainer.append(devices, logout);
  logout.addEventListener('click', handleLogoutButton);

  profileContainer.append(
    avatar,
    userName,
    userId,
    userKey,
    userEmail,
    bottomContainer,
  );
  return profileContainer;
};
