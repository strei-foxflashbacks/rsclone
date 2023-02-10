import createElement from '../../../helpers/createElement';
import openFilmPage from './functions/openFilmPage';
import getRatingElement from '../../rating/getRatingElement';
import handleAddingToFavorites from '../filmPage/functions/handleAddingToFavorites';

const getFilmElement = (path: string, title: string, titleEng: string, rating: number, note: string, id: string): HTMLElement => {
  const bigElement = createElement('div', { class: 'big-element', 'data-id': id });
  bigElement.style.backgroundImage = `url('${path}')`;
  bigElement.classList.add('films__big-element', 'films__photo');
  const container = createElement('div', { class: 'films__container' });
  const titleElem  = createElement('div', { class: 'films__title' }, title);
  const titleEngElem  = createElement('div', { class: 'films__title_eng' }, titleEng);

  const favorites = createElement('div', { class: 'films__favorites' });
  const icon = createElement('img', { src: './assets/favorites.svg', width: '30', height: '30' });
  favorites.append(icon);

  const noteElem = createElement('p', { class: 'films__note' }, note);
  container.append(titleElem, titleEngElem, getRatingElement(rating), noteElem);
  bigElement.append(container, favorites);
  favorites.addEventListener('click', handleAddingToFavorites);
  bigElement.addEventListener('click', openFilmPage);
  return bigElement;
};

export default getFilmElement;
