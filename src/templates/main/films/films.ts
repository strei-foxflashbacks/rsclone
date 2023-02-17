import createElement from '../../../helpers/createElement';
import { films } from '../../../components/controllers/filmPageController';
import getFilmElement from './filmElement';

const getFilms = () => {
  const mainContent = createElement('section', { class: 'films' });
  films.forEach(elem => {
    const film = getFilmElement(elem.path, elem.title, elem.titleEng, elem.rating, elem.note, elem.id);
    mainContent.append(film);
  });
  return mainContent;
};
export default getFilms;
