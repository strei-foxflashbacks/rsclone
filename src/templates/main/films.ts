import createElement from '../../helpers/createElement';

const getMainContent = (): HTMLElement => {
  const mainContent = createElement('section', { class: 'films' }, 'films');
  return mainContent;
};
export default getMainContent;
