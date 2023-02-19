import { getFilm } from '../../../../api/apiFilms';
import createElement from '../../../../helpers/createElement';
import { Film } from '../../../../types/Film';
import { FilmType } from '../../../../types/types';
import { userData } from '../tempData';
import getCardFavoriteFilmSerial from './getCardFilmSerial';

const getCardsFavorite = (typeFilm: FilmType): HTMLElement => {
  const cardsContainer = <HTMLElement>(
    createElement('div', { class: 'favorite-container' })
  );
  const favoriteFilmsIds = userData.collection.films;
  favoriteFilmsIds.forEach(async (id) => {
    const film: Film = await getFilm(id);
    if (film.type === typeFilm) {
      cardsContainer.append(getCardFavoriteFilmSerial(film));
    }
  });

  return cardsContainer;
};

export default getCardsFavorite;
