import getHeader from '../templates/header/header';
import clearElement from './clearElement';
import getFooter from '../templates/footer/footer';
const setCurrentPage = (mainElements: HTMLElement[]): HTMLElement => {
  const body = document.querySelector('body') as HTMLElement;
  if (!body) {
    throw new Error('body is not found!');
  }
  clearElement(body);

  const main = document.createElement('main');
  mainElements.forEach(element => {
    main.append(element);
  });
  const header = getHeader();
  const footer = getFooter();
  body.append(header, main, footer);
  return body;
};
export default setCurrentPage;
