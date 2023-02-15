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

  const text = createElement('div', {});

  if (currentStation === AddToPlayListValue.add) {
    text.innerText = AddToPlayListValue.remove;
  } else {
    text.innerText = AddToPlayListValue.add;
  }
  button.append(text);
};
export default handleAddingToPlaylist;
