import createElement from '../../../helpers/createElement';
import openFilmPage from './functions/openFilmPage';
import getRatingElement from '../../rating/getRatingElement';
import handleAddingToFavorites from '../filmPage/functions/handleAddingToFavorites';
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
  bigElement.style.backgroundImage = `url('${film.poster}')`;
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
  const icon = createElement('img', { src: '/assets/favorites.svg', width: '30', height: '30' });
  favorites.append(icon);

  const noteElem = createElement('p', { class: 'films__note' }, film.summary);
  container.append(titleElem, titleEngElem, getRatingElement(film.usersRating), noteElem);
  bigElement.append(container, favorites, ratingImbdContainer, ratingKpContainer);
  favorites.addEventListener('click', handleAddingToFavorites);
  bigElement.addEventListener('click', openFilmPage);
  return bigElement;
};

export default getFilmElement;
