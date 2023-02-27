import createElement from '../../../helpers/createElement';
import openFilmPage from './functions/openFilmPage';
import getRatingElement from '../../rating/getRatingElement';
import handleAddingToFavorites, {
  updateFavoritesButton,
} from '../filmPage/functions/handleAddingToFavorites';
import { Film } from '../../../types/Film';
import getCircleElement from '../userPage/functions/getCircleElement';

const getFilmElement = (film : Film): HTMLElement => {
  const bigElement = createElement(
    'div',
    {
      class: 'big-element films__big-element films__photo',
      'data-id': `${film.id}`,
    },
  );
  const img = createElement('img', 
    {
      class: 'films__img poster-img', 
      src: film.poster,
      alt: `${film.type} poster ${film.originalName}`,
      loading: 'lazy',
    });
  // bigElement.style.backgroundImage = `url('${film.poster}')`;
  const container = createElement('div', { class: 'films__container' });
  const titleElem  = createElement('div', { class: 'films__title' }, `${film.name}`);
  const titleEngElem  = createElement('div', { class: 'films__title_eng' }, `${film.originalName}`);

  const [imbd, kp] = film.ratings;

  const ratingKpContainer = createElement('div', {
    class:
      'card-film__rating-container rating-card card-film__rating-container-kp',
  });
  const ratingKp = createElement(
    'span',
    { class: 'card-film__rating-kp' },
    `${kp.toFixed(1) || '-'}`,
  );
  const ratingKpText = createElement(
    'span',
    { class: 'card-film__rating-text' },
    'КП',
  );
  const circleRatingKp = getCircleElement(kp);
  ratingKpContainer.append(ratingKp, ratingKpText, circleRatingKp);

  const ratingImbd = createElement(
    'span',
    { class: 'card-film__rating-imbd' },
    `${imbd.toFixed(1) || '-'}`,
  );
  const ratingImbdText = createElement(
    'span',
    { class: 'card-film__rating-text' },
    'IMBD',
  );
  const ratingImbdContainer = createElement('div', {
    class:
      'card-film__rating-container rating-card card-film__rating-container-imbd',
  });
  const circleRatingImbd = getCircleElement(imbd);
  ratingImbdContainer.append(ratingImbd, ratingImbdText, circleRatingImbd);

  const favorites = createElement('div', { class: 'films__favorites' });
  const icon = createElement('img', { width: '30', height: '30', alt: 'icon' }) as HTMLImageElement;
  icon.setAttribute('src', updateFavoritesButton(String(film.id), 'favorites-films'));
  favorites.append(icon);


  const noteElem = createElement('p', { class: 'films__note' }, film.summary);
  container.append(titleElem, titleEngElem, getRatingElement(film.usersRating), noteElem);
  bigElement.append(img, container, favorites, ratingImbdContainer, ratingKpContainer);
  favorites.addEventListener('click', handleAddingToFavorites);
  bigElement.addEventListener('click', openFilmPage);
  return bigElement;
};

export default getFilmElement;
