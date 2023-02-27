import createElement from '../../../../helpers/createElement';
import { toggleFavorite } from './toggleFavorite';

export const getFavoriteElement = (): HTMLElement => {
  const favorite = <HTMLElement>(
    createElement('div', { class: 'favorite-icon' })
  );
  if (favorite) favorite.classList.add('liked');
  favorite.addEventListener('click', toggleFavorite);
  return favorite;
};
