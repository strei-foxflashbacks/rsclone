import { getFilm } from '../../../../api/apiFilms';
import createElement from '../../../../helpers/createElement';
import { Film } from '../../../../types/Film';
import { FilmType, Page } from '../../../../types/types';
import getCardFavoriteFilmSerial from './getCardFilmSerial';
import getValueFromLS from '../../../../components/localStorage/getValueFromLS';

const getFilmsElemFavorite = (typeFilm: FilmType): HTMLElement => {
  const cardsContainer = <HTMLElement>(
    createElement('div', { class: 'favorite-container' })
  );
  const favorites = JSON.parse(getValueFromLS('favorites-films'));

  favorites.forEach(async (id: string) => {
    const idFilm = Number(id);
    const film: Film = await getFilm(idFilm);
    if (film.type === typeFilm) {
      cardsContainer.append(getCardFavoriteFilmSerial(film, Page.userPage));
    }
  });

  return cardsContainer;
};

export default getFilmsElemFavorite;
