import createElement from '../../../helpers/createElement';
import openFilmPage from './functions/openFilmPage';
import createFavourites from '../../../components/favouritesElement';
import { FavoritesColor } from '../../../types/favoritesColors';
import getRatingElement from '../../rating/getRatingElement';

const getFilmElement = (path: string, title: string, titleEng: string, rating: number, note: string, id: string): HTMLElement => {
  const bigElement = createElement('div', { class: 'big-element', 'data-id': id });
  bigElement.style.backgroundImage = `url('${path}')`;
  bigElement.classList.add('films__big-element', 'films__photo');
  const container = createElement('div', { class: 'films__container' });
  const titleElem  = createElement('div', { class: 'films__title' }, title);
  const titleEngElem  = createElement('div', { class: 'films__title_eng' }, titleEng);

  const favorites = createFavourites(FavoritesColor.white) as HTMLElement;
  favorites.classList.add('films__favorites');
  favorites.setAttribute('width', '30px');
  favorites.setAttribute('height', '30px');


  const noteElem = createElement('p', { class: 'films__note' }, note);
  container.append(titleElem, titleEngElem, getRatingElement(rating), noteElem);
  bigElement.append(container, favorites);
  bigElement.addEventListener('click', openFilmPage);
  return bigElement;
};

export default getFilmElement;
