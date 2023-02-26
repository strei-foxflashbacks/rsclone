import clearElement from '../../../../helpers/clearElement';
import createElement from '../../../../helpers/createElement';
import getValueFromLS from '../../../../components/localStorage/getValueFromLS';

//
export const updateFavoritesButton = (id: string, favoritesName: string): string => {
  const favorites: string[] = JSON.parse(getValueFromLS(favoritesName, '[]'));
  let src = '/assets/favorites.svg';
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i] === id) {
      src = '/assets/icon_like.svg';
      break;
    }
  }
  return src;
};

export const toggleFavoritesInLS = (id: string, favoritesName: string): void => {
  let isFound = false;
  const favorites: string[] = JSON.parse(getValueFromLS(favoritesName, '[]'));
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i] === id) {
      favorites.splice(i, 1);
      isFound = true;
    }
  }
  if (!isFound) {
    favorites.push(id);
  }
  localStorage.setItem(favoritesName, JSON.stringify(favorites));
};


const handleAddingToFavorites = (event: Event) => {
  event.stopPropagation();
  const target = event.target as HTMLElement;
  const general = target.closest('.films__favorites') as HTMLElement;
  if (!target.parentElement) {
    throw new Error('favorite container is not found');
  }
  const card = target.parentElement.parentElement;
  if (!card) {
    throw new Error('film card is not found');
  }

  const idFilm = card.getAttribute('data-id');
  if (!idFilm) {
    throw new Error('film id is not found');
  }

  if (!general) {
    throw new Error('favorites button is not found');
  }
  clearElement(general);
  const icon = createElement('img', { width: '30', height: '30' }) as HTMLImageElement;

  toggleFavoritesInLS(idFilm, 'favorites-films');
  icon.setAttribute('src', updateFavoritesButton(idFilm, 'favorites-films'));
  general.append(icon);
};

export default handleAddingToFavorites;
