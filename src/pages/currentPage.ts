import getHeader from '../templates/header/header';
import clearElement from '../helpers/clearElement';
import getFooter from '../templates/footer/footer';
import createElement from '../helpers/createElement';
import getAuthorizationModal from '../components/modals/authorization/authorization';
import closeModal from '../components/modals/functions/closeModal';
import setThemeStyles from '../components/themes/functions/setThemeStyles';
import getChangePasswordModal from '../components/modals/changePassword/getChangePasswordModal';

const setCurrentPage = (mainElements: HTMLElement[]): HTMLElement => {
  const body = document.querySelector('body') as HTMLElement;
  if (!body) {
    throw new Error('body is not found!');
  }
  clearElement(body);

  const authorization = getAuthorizationModal();
  const changePassword = getChangePasswordModal();
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
  body.insertAdjacentElement('afterbegin', changePassword);
  body.append(header, main, footer);
  setThemeStyles(body);
  return body;
};
export default setCurrentPage;
