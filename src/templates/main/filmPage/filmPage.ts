import createElement from '../../../helpers/createElement';
import { IFilmResponse } from '../../../types/IFilmResponse';
import getBigElement from '../films/bigElement';

const getFilmPage = (id: string): HTMLElement => {
  const container = createElement('div', { class: 'film-page' }, 'filmpage');
  console.log('getFilmPage');

  return container;
};
export default getFilmPage;
