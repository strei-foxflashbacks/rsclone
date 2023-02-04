import createElement from '../../helpers/createElement';
import '../../components/assets/showjet.png';

const getHeader = () :HTMLElement => {
  const header = createElement('header', { class: 'header-container' } );
  const container = createElement('div', { class: 'content-container' });

  const logoImg = createElement('img', { src: './assets/showjet.png', class: 'logo' });

  const containerSections = createElement('div', { class: 'sections' });
  const feed = createElement('a', { href: '#', class: 'sections__item' }, 'Лента');
  const serials = createElement('a', { href: '#', class: 'sections__item' }, 'Сериалы');


  const searchForm = createElement('form', { action: '', method: 'get', class: 'form' });
  const searchInput = createElement('input', { name: 'search', type: 'search', placeholder: 'Введите поисковой запрос', class: 'form__input' });
  const searchButton = createElement('button', { type: 'submit', class: 'form__search-button' });
  const searchIcon = createElement('img', { src: './assets/search.svg', alt: '' });
  searchButton.append(searchIcon);
  searchForm.append(searchInput, searchButton);

  const signIn = createElement('button', { type: 'button', id: 'signInButton', class: 'button' }, 'Войти');

  containerSections.append(feed, serials, searchForm, signIn);


  container.append(logoImg, containerSections);

  header.append(container);
  return header;

  // принимать из другой функции компонент кнопки авторизации (чтобы обновлять состояние)

};
export default getHeader;
