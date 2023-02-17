import createElement from '../../../helpers/createElement';
import getFilmElement from '../films/filmElement';
import { createInfoTable } from './infoTable';
import getGroupOfPosters from './groupOfPosters';
import getSeason from './season';
import getPersons from './persons';
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
  const materials = getGroupOfPosters();
  const persons = getPersons();
  const comments = getComments();
  const recommendations = getRecommendations();

  filmElement.removeEventListener('click', openFilmPage);


  container.append(navigation, filmElement, table, materials, getSeason(1), getSeason(2), persons, comments, recommendations);
  return container;
};



export default getFilmPage;
