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

  const materials = createElement('div', { class: 'materials' });
  const trailer = createElement('div', { class: 'materials__trailer' });
  const middlePoster = createElement('div', { class: 'materials__middle' });

  const materialsMiniGroup = createElement('div', { class: 'materials__group' });
  const miniPoster1 = createElement('div', { class: 'materials__mini' });
  const miniPoster2 = createElement('div', { class: 'materials__mini' });
  const miniPoster3 = createElement('div', { class: 'materials__mini' });
  const miniPoster4 = createElement('div', { class: 'materials__mini' });
  materialsMiniGroup.append(miniPoster1, miniPoster2, miniPoster3, miniPoster4);

  const bigPoster = createElement('div', { class: 'materials__big' });

  materials.append(trailer, middlePoster, materialsMiniGroup, bigPoster);


  container.append(filmElement, table, materials);
  return container;
};



export default getFilmPage;
