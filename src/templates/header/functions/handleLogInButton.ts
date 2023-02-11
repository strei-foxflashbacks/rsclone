import getAuthorizationModal from '../../../components/modals/authorization/authorization';
import createElement from '../../../helpers/createElement';
import closeModal from '../../../components/modals/functions/closeModal';

const handleLogInButton = (): void => {
  const authorization = getAuthorizationModal();
  const background = createElement('div', { class: 'background' });
  const body = document.querySelector('body');
  if (!body) {
    throw new Error('body is not found');
  }

  body.style.overflow = 'hidden';
  body.insertAdjacentElement('afterbegin', background);
  body.insertAdjacentElement('afterbegin', authorization);

  background.addEventListener('click', closeModal);
};
export default handleLogInButton;
