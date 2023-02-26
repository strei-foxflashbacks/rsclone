import getHeader from '../templates/header/header';
import clearElement from '../helpers/clearElement';
import getFooter from '../templates/footer/footer';
import createElement from '../helpers/createElement';
import getAuthorizationModal from '../components/modals/authorization/authorization';
import closeModal from '../components/modals/functions/closeModal';
import setThemeStyles from '../components/themes/functions/setThemeStyles';
import getChangePasswordModal from '../components/modals/changePassword/getChangePasswordModal';
import getRegisterModal from '../components/modals/registerModal/registerModal';

const setCurrentPage = async (container: HTMLElement): Promise<HTMLElement> => {
  const body = document.querySelector('body') as HTMLElement;
  if (!body) {
    throw new Error('body is not found!');
  }
  clearElement(body);

  const authorization = getAuthorizationModal();
  const register = getRegisterModal();
  const changePassword = getChangePasswordModal();

  let main = document.querySelector('#main') as HTMLElement;

  if (main) {
    clearElement(main);
  } else {
    main = createElement('main', { id: 'main' });
  }
  main.append(container);

  const header = await getHeader();
  const footer = getFooter();
  const background = createElement('div', { class: 'background' });
  background.addEventListener('click', closeModal);

  body.insertAdjacentElement('afterbegin', background);

  body.insertAdjacentElement('afterbegin', authorization);
  body.insertAdjacentElement('afterbegin', register);
  body.insertAdjacentElement('afterbegin', changePassword);
  body.append(header, main, footer);
  setThemeStyles(body);
  return body;
};
export default setCurrentPage;
