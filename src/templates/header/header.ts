import createElement from '../../helpers/createElement';
import handleLogInButton from './functions/handleLogInButton';
import openUserPage from './functions/openUserPage';
import setThemeStyles from '../../components/themes/functions/setThemeStyles';
import router from '../../components/router/router';
import { getUser } from '../../api/apiUsers';
import handleLogoutButton from './functions/handleLogoutButton';

const getHeader = async (): Promise<HTMLElement> => {
  const header = createElement('header', { class: 'header-container' });
  setThemeStyles(header);
  const container = createElement('div', { class: 'content-container' });

  const logoImg = createElement('img', {
    src: '/assets/showjet.png',
    class: 'logo',
  });
  logoImg.addEventListener('click', () => {
    router.navigateTo(router.root);
  });

  const containerSections = createElement('div', { class: 'sections' });

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
    src: '/assets/search.svg',
    alt: '',
  });
  searchButton.append(searchIcon);
  searchForm.append(searchInput, searchButton);

  const authContainer = createElement('div', {
    class: 'sections__item sections__auth',
  });

  const userData = await getUser();
  const name = userData ? userData.name : null;
  
  const userPageBtn = createElement(
    'div',
    {
      class: 'sections__item user-name',
    },
    `${name}`,
  );
  const userAvatar = createElement('img', {
    class: 'user-avatar',
    alt: 'User avatar',
    src: `${userData?.userpic || '/assets/smallAvatar.svg'}`,
  });
  userPageBtn.append(userAvatar);
  userPageBtn.addEventListener('click', openUserPage);
  if (name) userPageBtn.style.display = 'flex';

  const signIn = createElement(
    'button',
    { 
      type: 'button',
      id: 'signInButton',
      class: 'button',
    },
    `${name ? 'Выйти' : 'Войти'}`,
  );
  authContainer.append(userPageBtn, signIn);

  containerSections.append(searchForm, authContainer);

  container.append(logoImg, containerSections);

  if (!name) signIn.addEventListener('click', handleLogInButton);
  else signIn.addEventListener('click', handleLogoutButton);

  header.append(container);
  return header;
};
export default getHeader;
