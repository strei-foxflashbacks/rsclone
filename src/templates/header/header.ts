import { user } from '../../components/userData';
import createElement from '../../helpers/createElement';
import handleLogInButton from './functions/handleLogInButton';
import openUserPage from './functions/openUserPage';
import setThemeStyles from '../../components/themes/functions/setThemeStyles';

const getHeader = (): HTMLElement => {
  const header = createElement('header', { class: 'header-container' });
  setThemeStyles(header);
  const container = createElement('div', { class: 'content-container' });

  const logoImg = createElement('img', {
    src: './assets/showjet.png',
    class: 'logo',
  });

  const containerSections = createElement('div', { class: 'sections' });
  const feed = createElement(
    'a',
    { href: '#', class: 'sections__item' },
    'Лента',
  );
  const serials = createElement(
    'a',
    { href: '#', class: 'sections__item' },
    'Сериалы',
  );

  const searchForm = createElement('form', {
    action: '',
    method: 'get',
    class: 'form',
  });
  const searchInput = createElement('input', {
    name: 'search',
    type: 'search',
    placeholder: 'Введите поисковой запрос',
    class: 'form__input',
  });
  const searchButton = createElement('button', {
    type: 'submit',
    class: 'form__search-button',
  });
  const searchIcon = createElement('img', {
    src: './assets/search.svg',
    alt: '',
  });
  searchButton.append(searchIcon);
  searchForm.append(searchInput, searchButton);

  const authContainer = createElement('div', {
    class: 'sections__item sections__auth',
  });

  const isAuth = true;

  const userPageBtn = createElement(
    'a',
    {
      class: 'sections__item user-name',
      href: '#',
    },
    `${user.name}`,
  );
  const userAvatar = createElement('img', {
    class: 'user-avatar',
    alt: 'User avatar',
    src: `${user.avatarSrc || './assets/smallAvatar.svg'}`,
  });
  userPageBtn.append(userAvatar);

  userPageBtn.addEventListener('click', openUserPage);

  if (isAuth) userPageBtn.style.display = 'flex';

  const signIn = createElement(
    'button',
    { type: 'button', id: 'signInButton', class: 'button' },
    `${isAuth ? 'Выйти' : 'Войти'}`,
  );
  authContainer.append(userPageBtn, signIn);

  containerSections.append(feed, serials, searchForm, authContainer);

  container.append(logoImg, containerSections);

  signIn.addEventListener('click', handleLogInButton);

  header.append(container);
  return header;

  // принимать из другой функции компонент кнопки авторизации (чтобы обновлять состояние)

};
export default getHeader;
