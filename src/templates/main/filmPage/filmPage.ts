import createElement from '../../../helpers/createElement';
import { IFilmResponse } from '../../../types/IFilmResponse';
import getFilmElement from '../films/filmElement';
import { createInfoTable } from './infoTable';

const getFilmPage = (elem: IFilmResponse): HTMLElement => {
  const container = createElement('div', { class: 'film-page' });
  //добавить компонент крошек

  const filmElement = getFilmElement(elem.path, elem.title, elem.titleEng, elem.rating, elem.note, elem.id);
  filmElement.classList.add('film-page__header-margin');

  const table = createInfoTable();

  container.append(filmElement, table);
  return container;
};



export default getFilmPage;
