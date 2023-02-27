import createElement from '../../../../helpers/createElement';
import { Film } from '../../../../types/Film';
import getCircleElement from './getCircleElement';
import { getDescText } from './getDescText';
import { getFavoriteElement } from './getFavoriteElement';
import {
  deleteFavoriteElemFromPage,
  deleteFavoritesElementFromLS,
} from '../../films/functions/deleteFromFavorites';
import openFilmPage from '../../films/functions/openFilmPage';
import { Page } from '../../../../types/types';
import { toggleFavoritesInLS, updateFavoritesButton } from '../../filmPage/functions/handleAddingToFavorites';

const getCardFavoriteFilmSerial = (film: Film, page: Page): HTMLElement => {
  const card = <HTMLElement>(
    createElement('div', { class: 'card-film card-info', 'data-id': `${film.id}` })
  );
  card.style.backgroundImage = `url(${film.poster})`;

  const resolution = createElement(
    'div',
    { class: 'card-film__resolution' },
    'FullHD 1080p',
  );

  const [imbd, kp] = film.ratings;

  const ratingImbdContainer = createElement('div', {
    class:
      'card-film__rating-container rating-card card-film__rating-container-imbd',
  });
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
  const circleRatingImbd = getCircleElement(imbd);
  ratingImbdContainer.append(ratingImbd, ratingImbdText, circleRatingImbd);

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
  const favorite = getFavoriteElement();

  let srcForIcon = updateFavoritesButton(String(film.id), 'favorites-films');
  favorite.style.backgroundImage = `url('${srcForIcon}')`;

  favorite.classList.add('card-film__favorite');
  if (page === Page.userPage) {
    favorite.addEventListener('click', () => {
      deleteFavoritesElementFromLS(`${film.id}`, 'favorites-films');
      deleteFavoriteElemFromPage(favorite);
    });
  } else if (page === Page.personPage) {
    favorite.addEventListener('click', () => {
      toggleFavoritesInLS(`${film.id}`, 'favorites-films');
      srcForIcon = updateFavoritesButton(String(film.id), 'favorites-films');
      favorite.style.backgroundImage = `url('${srcForIcon}')`;
    });
  }

  const ageLimit = createElement('div', { class: 'card-film__limit' }, `${film.age}`);
  const descContainer = createElement('div', {
    class: 'card-film__desc-container',
  });
  const title = createElement(
    'div',
    { class: 'card-film__desc-title card-info__title' },
    `${film.name}`,
  );
  const desc = createElement(
    'div',
    { class: 'card-film__desc' },
    `${getDescText(film)}`,
  );
  descContainer.append(title, desc);

  card.append(
    resolution,
    ratingImbdContainer,
    ratingKpContainer,
    favorite,
    ageLimit,
    descContainer,
  );
  card.addEventListener('click', (e: Event) => {
    const target = <HTMLElement>e.target;
    if (target.classList.contains('card-film__favorite')) return;
    openFilmPage(e);
  });
  return card;
};

export default getCardFavoriteFilmSerial;
