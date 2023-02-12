import createElement from '../../../../helpers/createElement';
import { Film } from '../../../../types/types';
import { filmmm } from '../tempData';
import getCardFavoriteFilmSerial from './getCardFavoriteFilmSerial';

const getCardsFavorite = (): HTMLElement => {
  const favorite: Film[] = [filmmm, filmmm, filmmm, filmmm, filmmm];
  const cardsContainer = <HTMLElement>(
    createElement('div', { class: 'favorite-container' })
  );

  favorite.forEach((fav: Film) => {
    cardsContainer.append(getCardFavoriteFilmSerial(fav));
  });

  return cardsContainer;
};

export default getCardsFavorite;
