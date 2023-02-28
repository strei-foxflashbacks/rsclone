import createElement from '../../../helpers/createElement';
import { AddToPlayListValue, PlaylistItem } from '../../../types/types';
import handleShowAll from './functions/handleShowAll';
import setThemeStyles from '../../../components/themes/functions/setThemeStyles';
import { Film } from '../../../types/Film';
import getSerialEpisode from './serialEpisode';
import clearElement from '../../../helpers/clearElement';
import getValueFromLS from '../../../components/localStorage/getValueFromLS';

export const updatePlaylistsButton = (film: Film, order?: number): string => {
  let textButton = AddToPlayListValue.add;

  let isFound = false;
  const favorites: PlaylistItem[] = JSON.parse(getValueFromLS('playlist', '[]'));
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].type === 'serial') {
      if (favorites[i].id === `${film.id}` && favorites[i].season === order) {
        textButton = AddToPlayListValue.remove;
        isFound = true;
      }
    } else {
      if (favorites[i].id === `${film.id}`) {
        textButton = AddToPlayListValue.add;
        isFound = true;
      }
    }
  }
  if (!isFound) {
    textButton = AddToPlayListValue.add;
  }
  return textButton;
};

const togglePlaylistElementInLS = (film: Film, order?: number) => {
  let isFound = false;
  const favorites: PlaylistItem[] = JSON.parse(getValueFromLS('playlist', '[]'));
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].type === 'serial') {
      if (favorites[i].id === `${film.id}` && favorites[i].season === order) {
        favorites.splice(i, 1);
        isFound = true;
      }
    } else {
      if (favorites[i].id === `${film.id}`) {
        favorites.splice(i, 1);
        isFound = true;
      }
    }
  }
  if (!isFound) {
    favorites.push({ id: `${film.id}`, type: film.type, season: order });
  }
  localStorage.setItem('playlist', JSON.stringify(favorites));
};


export const getSeason = (film: Film, order: number): HTMLElement => {
  const season = createElement('div', { class: 'season collapsed' });
  const titleContainer = createElement('div', { class: 'season__title-container' });
  const title = createElement('div', { class: 'season__title' }, `сезон ${order + 1}`);

  const addingButton = createElement('button', { class: 'adding-button button' });
  const text = createElement('div', {});
  text.innerText = updatePlaylistsButton(film, order);
  addingButton.append(text);

  titleContainer.append(title, addingButton);

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

  addingButton.addEventListener('click', () => {
    togglePlaylistElementInLS(film, order);

    clearElement(addingButton);
    const textButton = createElement('div', {});
    textButton.innerText = updatePlaylistsButton(film, order);
    addingButton.append(textButton);
  });



  return season;
};

export const getFilm = (film: Film):HTMLElement => {
  const filmElement = createElement('div', { class: 'season' });
  const titleContainer = createElement('div', { class: 'season__title-container' });
  const title = createElement('div', { class: 'season__title' }, `${film.name}`);

  const addingButton = createElement('button', { class: 'adding-button button' });
  const text = createElement('div', {});
  text.innerText = updatePlaylistsButton(film);
  addingButton.append(text);
  addingButton.addEventListener('click', () => {
    togglePlaylistElementInLS(film);

    clearElement(addingButton);
    const textButton = createElement('div', {});
    textButton.innerText = updatePlaylistsButton(film);
    addingButton.append(textButton);
  });

  titleContainer.append(title, addingButton);
  const seriesContainer = createElement('div', { class: 'season__series' });
  seriesContainer.append(getSerialEpisode(film.id, film.film!));
  filmElement.append(titleContainer, seriesContainer);
  return filmElement;
};
