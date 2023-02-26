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

const deleteFavoritesElementFromLS = (id: string, favoritesName: string) => {
  const favorites: string[] = JSON.parse(getValueFromLS(favoritesName, '[]'));
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i] === id) {
      favorites.splice(i, 1);
    }
  }
  localStorage.setItem(favoritesName, JSON.stringify(favorites));
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
  deleteFavoritesElementFromLS(idFilm, 'favorites-films');
};
