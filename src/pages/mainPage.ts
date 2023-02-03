import createElement from '../helpers/createElement';
import clearElement from './clearElement';
import getNews from '../templates/main/news';
import getMainContent from '../templates/main/mainContent';

export const getMainPage = () :HTMLElement => {
  let main = document.querySelector('main');

  if (main) {
    clearElement(main);
  } else {
    main = createElement('main', {});
  }

  main.append(getNews(), getMainContent());
  return main;
};
export default getMainPage;
