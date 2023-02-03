import createElement from '../../helpers/createElement';
import '../../components/assets/showjet.png';

const getHeader = () :HTMLElement => {
  const header = createElement('header', { class: 'header-container' } );
  const container = createElement('div', { class: 'content-container' });

  const logoImg = createElement('img', { src: './assets/showjet.png' });

  const feed = createElement('a', { href: '#' }, 'Лента');
  const serials = createElement('a', { href: '#' }, 'Сериалы');

  const searchForm = createElement('form', { action: '', method: 'get', class: 'form' });
  const searchInput = createElement('input', { name: 'search', type: 'search', placeholder: 'Enter...', class: 'form__input' });
  const searchButton = createElement('button', { type: 'submit', class: 'form__search-button' });
  const searchIcon = createElement('img', { src: './assets/search.svg', alt: '' });
  searchForm.append(searchInput, searchButton, searchIcon);

  const signIn = createElement('button', { type: 'button', value: 'Войти', id: 'signInButton' });

  container.append(logoImg, feed, serials, searchForm, signIn);

  header.append(container);
  return header;

  // принимать из другой функции компонент кнопки авторизации (чтобы обновлять состояние)

};
export default getHeader;
