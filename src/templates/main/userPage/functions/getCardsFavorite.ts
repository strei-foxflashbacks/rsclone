import createElement from '../../../../helpers/createElement';
import { Film, FilmType } from '../../../../types/types';
import { filmmm, ser } from '../tempData';
import getCardFavoriteFilmSerial from './getCardFilmSerial';

const getCardsFavorite = (typeFilm: FilmType): HTMLElement => {
  const favoriteFilm: Film[] = [filmmm, filmmm, filmmm, filmmm, filmmm];
  const favoriteSerial: Film[] = [ser, ser, ser, ser, ser];
  const cardsContainer = <HTMLElement>(
    createElement('div', { class: 'favorite-container' })
  );
  if (typeFilm === 'film') {
    favoriteFilm.forEach((fav: Film) => {
      cardsContainer.append(getCardFavoriteFilmSerial(fav));
    });
  }
  if (typeFilm === 'serial') {
    favoriteSerial.forEach((fav: Film) => {
      cardsContainer.append(getCardFavoriteFilmSerial(fav));
    });
  }

  return cardsContainer;
};

export default getCardsFavorite;
