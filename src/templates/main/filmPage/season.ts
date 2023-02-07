import createElement from '../../../helpers/createElement';
import getSerialEpisode from './serialEpisode';

const getSeason = (order: number): HTMLElement => {
  const season = createElement('div', { class: 'season' });
  const titleContainer = createElement('div', { class: 'season__title-container' });
  const title = createElement('div', { class: 'season__title' }, `сезон ${order}`);
  const addingButton = createElement('button', { class: 'season__button' }, 'добавить в плейлист');
  const icon = createElement('img', { class: 'season__icon', src: './assets/plus.svg' });
  addingButton.append(icon);
  titleContainer.append(title, addingButton);

  const seriesContainer = createElement('div', { class: 'season__series' });

  for (let i = 1; i < 11; i++) {
    seriesContainer.append(getSerialEpisode(i, `Лаура и тайная комната ${i}`, true));
  }
  const showMore = createElement('button', { class: 'season__show-more' }, 'Показать все');
  const backForArrow = createElement('div', { class: 'season__back-arrow' });
  season.append(titleContainer, seriesContainer, showMore, backForArrow);
  return season;
};
export default getSeason;

