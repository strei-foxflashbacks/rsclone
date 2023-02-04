import createElement from '../helpers/createElement';
import clearElement from './clearElement';
import getNews from '../templates/main/news';
import getMainContent from '../templates/main/films';

export const getMainPage = () :HTMLElement => {
  let main = document.querySelector('main');

  if (main) {
    clearElement(main);
  } else {
    main = createElement('main', { class: 'wrapper' });
  }

  const containerMainPage = createElement('div', { class: 'news-and-films' });
  containerMainPage.append(getNews(), getMainContent());
  main.append(containerMainPage);

  return main;
};
export default getMainPage;
