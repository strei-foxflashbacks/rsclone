import createElement from '../helpers/createElement';
import getNews from '../templates/main/news/news';
import getMainContent from '../templates/main/films/films';

const getMainPage = (): HTMLElement => {

  const containerMainPage = createElement('div', { class: 'wrapper' });
  containerMainPage.append(getNews(), getMainContent());
  return containerMainPage;
};
export default getMainPage;
