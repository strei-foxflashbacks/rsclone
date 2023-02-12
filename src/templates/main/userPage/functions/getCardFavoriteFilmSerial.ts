/* eslint-disable @typescript-eslint/comma-dangle */
import createElement from '../../../../helpers/createElement';
import { Film } from '../../../../types/types';
import { toggleFavorite } from './toggleFavorite';
import { getDescText } from './getDescText';

const getCardFavoriteFilmSerial = (film: Film): HTMLElement => {
  const card = <HTMLElement>createElement('div', { class: 'card' });
  card.style.backgroundImage = `url(${film.poster})`;

  const resolution = createElement(
    'span',
    { class: 'card__resolution' },
    'FullHD 1080p'
  );

  const ratingImbdContainer = createElement('div', {
    class: 'card__rating-container rating-card card__rating-container-imbd',
  });
  const ratingImbd = createElement(
    'span',
    { class: 'card__rating-imbd' },
    `${film.rating.toFixed(1)}`
  );
  const ratingImbdText = createElement(
    'span',
    { class: 'card__rating-text' },
    'IMBD'
  );
  ratingImbdContainer.append(ratingImbd, ratingImbdText);

  const ratingKpContainer = createElement('div', {
    class: 'card__rating-container rating-card card__rating-container-kp',
  });
  const ratingKp = createElement(
    'span',
    { class: 'card__rating-kp' },
    `${film.rating.toFixed(1)}`
  );
  const ratingKpText = createElement(
    'span',
    { class: 'card__rating-text' },
    'KP'
  );
  ratingKpContainer.append(ratingKp, ratingKpText);

  const favorite = <HTMLElement>(
    createElement('div', { class: 'card__favorite' })
  );
  if (favorite) favorite.classList.add('liked');
  favorite.addEventListener('click', toggleFavorite);

  const ageLimit = createElement('div', { class: 'card__limit' }, '16+');

  const descContainer = createElement('div', { class: 'card__desc-container' });
  const title = createElement(
    'div',
    { class: 'card__desc-title' },
    `${film.name}`
  );
  const desc = createElement(
    'div',
    { class: 'card__desc' },
    `${getDescText(film)}`
  );
  descContainer.append(title, desc);

  card.append(
    resolution,
    ratingImbdContainer,
    ratingKpContainer,
    favorite,
    ageLimit,
    descContainer
  );
  return card;
};

export default getCardFavoriteFilmSerial;
