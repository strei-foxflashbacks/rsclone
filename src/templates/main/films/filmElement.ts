import createElement from '../../../helpers/createElement';
import openFilmPage from './functions/openFilmPage';
import getRatingElement from '../../rating/getRatingElement';
import handleAddingToFavorites from '../filmPage/functions/handleAddingToFavorites';
import { Film } from '../../../types/Film';

const getFilmElement = (film : Film): HTMLElement => {
  const bigElement = createElement(
    'div', 
    { 
      class: 'big-element films__big-element films__photo',
      'data-id': `${film.id}`, 
    },
  );
  bigElement.style.backgroundImage = `url('${film.poster}')`;
  const container = createElement('div', { class: 'films__container' });
  const titleElem  = createElement('div', { class: 'films__title' }, `${film.name}`);
  const titleEngElem  = createElement('div', { class: 'films__title_eng' }, `${film.originalName}`);

  const favorites = createElement('div', { class: 'films__favorites' });
  const icon = createElement('img', { src: './assets/favorites.svg', width: '30', height: '30' });
  favorites.append(icon);

  const noteElem = createElement('p', { class: 'films__note' }, film.summary);
  container.append(titleElem, titleEngElem, getRatingElement(film.usersRating), noteElem);
  bigElement.append(container, favorites);
  favorites.addEventListener('click', handleAddingToFavorites);
  bigElement.addEventListener('click', openFilmPage);
  return bigElement;
};

export default getFilmElement;
