import createElement from '../../../helpers/createElement';
import { IFilmResponse } from '../../../types/IFilmResponse';
import getFilmElement from '../films/filmElement';
import { createInfoTable } from './infoTable';
import getGroupOfPosters from './groupOfPosters';
import getSeason from './season';
import getPersons from './persons';
import getRecommendations from './recommendations';
import openFilmPage from '../films/functions/openFilmPage';
import getComments from './comments';
import { getNavigation } from '../navigation';

const getFilmPage = (elem: IFilmResponse): HTMLElement => {
  const wrapper = createElement('div', { class: 'wrapper' });
  const container = createElement('div', { class: 'film-page' });

  const filmElement = getFilmElement(elem.path, elem.title, elem.titleEng, elem.rating, elem.note, elem.id);
  filmElement.classList.add('film-page__header-margin');

  const navigation = getNavigation(`${elem.title}`);

  const table = createInfoTable();
  const materials = getGroupOfPosters();
  const persons = getPersons();
  const comments = getComments();
  const recommendations = getRecommendations();

  filmElement.removeEventListener('click', openFilmPage);


  container.append(navigation, filmElement, table, materials, getSeason(1), getSeason(2), persons, comments, recommendations);
  wrapper.append(container);
  return wrapper;
};


export default getFilmPage;
