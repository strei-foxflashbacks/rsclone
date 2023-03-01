import createElement from '../../../helpers/createElement';
import handleShowAll from './functions/handleShowAll';
import setThemeStyles from '../../../components/themes/functions/setThemeStyles';
import { Film } from '../../../types/Film';
import getSerialEpisode from './serialEpisode';


export const getSeason = (film: Film, order: number): HTMLElement => {
  const season = createElement('div', { class: 'season collapsed' });
  const titleContainer = createElement('div', { class: 'season__title-container' });
  const title = createElement('div', { class: 'season__title' }, `сезон ${order + 1}`);

  titleContainer.append(title);

  const seriesContainer = createElement('div', { class: 'season__series' });

  film.serial!.seasons[order].episodes.forEach((episode, episodeNumber) => {
    seriesContainer.append(getSerialEpisode(film.id, episode, order + 1, episodeNumber + 1));
  },
  );

  const showMore = createElement('button', { class: 'season__show-more' }, 'Показать все');
  const backForArrow = createElement('div', { class: 'season__back-arrow' });
  setThemeStyles(backForArrow);
  season.append(titleContainer, seriesContainer, showMore, backForArrow);

  showMore.addEventListener('click', handleShowAll);

  return season;
};

export const getFilm = (film: Film):HTMLElement => {
  const filmElement = createElement('div', { class: 'season' });
  const titleContainer = createElement('div', { class: 'season__title-container' });
  const title = createElement('div', { class: 'season__title' }, `${film.name}`);

  titleContainer.append(title);
  const seriesContainer = createElement('div', { class: 'season__series' });
  seriesContainer.append(getSerialEpisode(film.id, film.film!));
  filmElement.append(titleContainer, seriesContainer);
  return filmElement;
};
