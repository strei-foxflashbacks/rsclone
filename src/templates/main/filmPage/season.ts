import createElement from '../../../helpers/createElement';
import getSerialEpisode from './serialEpisode';
import handleAddingToPlaylist from './functions/handleAddingToPlaylist';
import getAddOrRemoveButton from './getAddOrRemoveButton';
import { AddToPlayListValue } from '../../../types/types';

const getSeason = (order: number): HTMLElement => {
  const season = createElement('div', { class: 'season' });
  const titleContainer = createElement('div', { class: 'season__title-container' });
  const title = createElement('div', { class: 'season__title' }, `сезон ${order}`);
  const addingButton = getAddOrRemoveButton('./assets/plus.svg', AddToPlayListValue.add);
  titleContainer.append(title, addingButton);

  const seriesContainer = createElement('div', { class: 'season__series' });

  for (let i = 1; i < 11; i++) {
    seriesContainer.append(getSerialEpisode(i, `Лаура и тайная комната ${i}`, true));
  }
  const showMore = createElement('button', { class: 'season__show-more' }, 'Показать все');
  const backForArrow = createElement('div', { class: 'season__back-arrow' });
  season.append(titleContainer, seriesContainer, showMore, backForArrow);

  addingButton.addEventListener('click', handleAddingToPlaylist);


  return season;
};
export default getSeason;

