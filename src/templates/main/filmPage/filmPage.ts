import createElement from '../../../helpers/createElement';
import getFilmElement from '../films/filmElement';
import { createInfoTable } from './infoTable';
import getGroupOfPosters from './groupOfPosters';
import { getSeason, getFilm } from './season';
import getPersonsElement from './persons';
import openFilmPage from '../films/functions/openFilmPage';
import { getNavigation } from '../navigation';
import { Film } from '../../../types/Film';

const getFilmPage = (film: Film): HTMLElement => {
  const wrapper = createElement('div', { class: 'wrapper' });
  const container = createElement('div', { class: 'film-page' });

  const filmElement = getFilmElement(film);
  filmElement.classList.add('film-page__header-margin');

  const navigation = getNavigation(film.name);

  const table = createInfoTable(film);
  const materials = getGroupOfPosters(film);
  const persons = getPersonsElement(film);
  //const comments = getComments();
  //const recommendations = getRecommendations();
  container.append(navigation, filmElement, table, materials);

  if (film.type === 'film') {
    container.append(getFilm(film));
  } else {
    for (let i = 0; i < film.serial!.seasonsQty; i++) {
      container.append(getSeason(film, i));
    }
  }

  filmElement.removeEventListener('click', openFilmPage);

  //container.append(persons, comments, recommendations);
  container.append(persons);

  wrapper.append(container);
  return wrapper;
};


export default getFilmPage;
