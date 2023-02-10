import createElement from '../../../helpers/createElement';
import getSerialEpisode from './serialEpisode';
import handleAddingToPlaylist from './functions/handleAddingToPlaylist';
import getAddOrRemoveButton from './addOrRemoveButton';
import { AddToPlayListValue } from '../../../types/types';
import handleShowAll from './functions/handleShowAll';

const getSeason = (order: number): HTMLElement => {
  const season = createElement('div', { class: 'season collapsed' });
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

  showMore.addEventListener('click', handleShowAll);
  addingButton.addEventListener('click', handleAddingToPlaylist);


  return season;
};
export default getSeason;

