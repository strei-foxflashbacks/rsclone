import { AddToPlayListValue } from '../../../../types/types';
import clearElement from '../../../../helpers/clearElement';
import createElement from '../../../../helpers/createElement';

const handleAddingToPlaylist = (event: Event): void => {
  const target = event.target as HTMLElement;
  const button = target.closest('button');
  if (!button) {
    throw new Error('target.closest(button) is not found');
  }
  if (!button.lastElementChild) {
    throw new Error('button.lastElementChild is not found');
  }
  const currentStation = button.lastElementChild.textContent;
  clearElement(button);

  const icon = createElement('img', { class: 'adding-button__icon' });
  const text = createElement('div', {});

  if (currentStation === AddToPlayListValue.add) {
    icon.setAttribute('src', './assets/minus.svg');
    text.innerText = AddToPlayListValue.remove;
  } else {
    icon.setAttribute('src', './assets/plus.svg');
    text.innerText = AddToPlayListValue.add;
  }
  button.append(icon, text);
};
export default handleAddingToPlaylist;
