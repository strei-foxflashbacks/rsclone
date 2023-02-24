import getValueFromLS from '../../../../components/localStorage/getValueFromLS';

const deleteFilmFromPage = (element: HTMLElement) => {
  const filmCard = element.parentElement;
  if (!filmCard) {
    throw new Error('film card is not found');
  }
  if (!filmCard.parentElement) {
    throw new Error('container for film card is not found');
  }
  filmCard.parentElement.removeChild(filmCard);
};

const deleteFilmFromLS = (id: string) => {
  const favorites: string[] = JSON.parse(getValueFromLS('favorites', '[]'));
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i] === id) {
      favorites.splice(i, 1);
    }
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const deleteFromFavorites = (event: Event) => {
  const target = event.target as HTMLElement;
  const filmCard = target.parentElement;
  if (!filmCard) {
    throw new Error('film card is not found');
  }
  const idFilm = filmCard.getAttribute('data-id');
  if (!idFilm) {
    throw new Error('id film is not found');
  }

  deleteFilmFromPage(target);
  deleteFilmFromLS(idFilm);
};
