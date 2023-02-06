import createElement from '../../../helpers/createElement';

const getFilmPage = (id: string): HTMLElement => {
  const container = createElement('div', { class: 'film-page' }, 'filmpage');
  console.log('getFilmPage');

  return container;
};
export default getFilmPage;
