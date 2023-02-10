import getHeader from '../templates/header/header';
import clearElement from '../helpers/clearElement';
import getFooter from '../templates/footer/footer';
import createElement from '../helpers/createElement';

const setCurrentPage = (mainElements: HTMLElement[]): HTMLElement => {
  const body = document.querySelector('body') as HTMLElement;
  if (!body) {
    throw new Error('body is not found!');
  }
  clearElement(body);

  const main = createElement('main', { class: 'wrapper' });
  mainElements.forEach(element => {
    main.append(element);
  });
  const header = getHeader();
  const footer = getFooter();
  body.append(header, main, footer);
  return body;
};
export default setCurrentPage;
