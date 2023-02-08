import createElement from '../../../helpers/createElement';
import { IFilmResponse } from '../../../types/IFilmResponse';
import getFilmElement from '../films/filmElement';
import { createInfoTable } from './infoTable';
import getGroupOfPosters from './groupOfPosters';
import getSeason from './season';
import getPersons from './persons';

const getFilmPage = (elem: IFilmResponse): HTMLElement => {
  const container = createElement('div', { class: 'film-page' });
  //добавить компонент крошек

  const filmElement = getFilmElement(elem.path, elem.title, elem.titleEng, elem.rating, elem.note, elem.id);
  filmElement.classList.add('film-page__header-margin');

  const table = createInfoTable();
  const materials = getGroupOfPosters();
  const persons = getPersons();


  container.append(filmElement, table, materials, getSeason(1), getSeason(2), persons);
  return container;
};



export default getFilmPage;
