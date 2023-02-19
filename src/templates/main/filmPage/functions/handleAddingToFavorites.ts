import clearElement from '../../../../helpers/clearElement';
import createElement from '../../../../helpers/createElement';

const handleAddingToFavorites = (event: Event) => {
  event.stopPropagation();
  const target = event.target as HTMLElement;
  const general = target.closest('.films__favorites') as HTMLElement;

  if (!general) {
    throw new Error('favorites button is not found');
  }
  clearElement(general);
  const icon = createElement('img', { width: '30', height: '30' });
  if (general.classList.contains('active')) {
    general.classList.remove('active');
    icon.setAttribute('src', '/assets/favorites.svg');
  } else {
    general.classList.add('active');
    icon.setAttribute('src', '/assets/favorites-active.svg');
  }
  general.append(icon);
};
export default handleAddingToFavorites;
