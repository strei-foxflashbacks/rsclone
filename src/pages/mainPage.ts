import createElement from '../helpers/createElement';
import getNews from '../templates/main/news/news';
import getFilms from '../templates/main/films/films';

const getMainPage = async (): Promise<HTMLElement> => {
  const containerMainPage = createElement('div', { class: 'wrapper' });
  containerMainPage.append(getNews(), await getFilms());
  return containerMainPage;

};
export default getMainPage;
