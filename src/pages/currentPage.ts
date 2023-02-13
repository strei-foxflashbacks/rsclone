import getHeader from '../templates/header/header';
import clearElement from '../helpers/clearElement';
import getFooter from '../templates/footer/footer';
import createElement from '../helpers/createElement';
import getAuthorizationModal from '../components/modals/authorization/authorization';
import closeModal from '../components/modals/functions/closeModal';
import setThemeInLS from '../components/themes/functions/setThemeInLS';
import getItemFromLS from '../components/localStorage/getItemFromLS';

const setCurrentPage = (mainElements: HTMLElement[]): HTMLElement => {
  const body = document.querySelector('body') as HTMLElement;
  if (!body) {
    throw new Error('body is not found!');
  }
  clearElement(body);

  const authorization = getAuthorizationModal();
  const main = createElement('main', { class: 'wrapper' });
  mainElements.forEach((element) => {
    main.append(element);
  });
  const header = getHeader();
  const footer = getFooter();
  const background = createElement('div', { class: 'background' });
  background.addEventListener('click', closeModal);

  body.insertAdjacentElement('afterbegin', background);

  body.insertAdjacentElement('afterbegin', authorization);
  body.append(header, main, footer);

  const currentTheme = getItemFromLS('themes');
  setThemeInLS(currentTheme);

  return body;
};
export default setCurrentPage;
