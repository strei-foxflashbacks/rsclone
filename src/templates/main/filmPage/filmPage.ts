import createElement from '../../../helpers/createElement';
import getFilmElement from '../films/filmElement';
import { createInfoTable } from './infoTable';
import getGroupOfPosters from './groupOfPosters';
import { getSeason, getFilm } from './season';
import getPersonsElement from './persons';
import getRecommendations from './recommendations';
import openFilmPage from '../films/functions/openFilmPage';
import getComments from './comments';
import { Film } from '../../../types/Film';

const getFilmPage = (film: Film): HTMLElement => {
  const container = createElement('div', { class: 'film-page' });
  const navigation = createElement('div', { class: 'navigation' });
  const elementNavigation = createElement('a', { class: 'navigation__item', href: '#' }, 'Главная');
  const elementNavigation2 = createElement('a', { class: 'navigation__item', href: '#' }, 'Страница фильма');
  navigation.append(elementNavigation, elementNavigation2);


  const filmElement = getFilmElement(film);
  filmElement.classList.add('film-page__header-margin');

  const table = createInfoTable(film);
  const materials = getGroupOfPosters(film);
  const persons = getPersonsElement(film);
  const comments = getComments();
  const recommendations = getRecommendations();
  container.append(navigation, filmElement, table, materials);

  if (film.type === 'film') {
    container.append(getFilm(film));
  } else {
    for (let i = 0; i < film.serial!.seasonsQty; i++) {
      container.append(getSeason(film, i));
    }
  }
  container.append(persons, comments, recommendations);

  filmElement.removeEventListener('click', openFilmPage);

  return container;
};

export default getFilmPage;
