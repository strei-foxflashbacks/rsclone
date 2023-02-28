import createElement from '../../../helpers/createElement';
import { AddToPlayListValue } from '../../../types/types';
import handleShowAll from './functions/handleShowAll';
import setThemeStyles from '../../../components/themes/functions/setThemeStyles';
import { Film } from '../../../types/Film';
import getSerialEpisode from './serialEpisode';
import clearElement from '../../../helpers/clearElement';
import getValueFromLS from '../../../components/localStorage/getValueFromLS';

export const updatePlaylistsButton = (id: string, favoritesName: string): string => {
  const favorites: string[] = JSON.parse(getValueFromLS(favoritesName, '[]'));
  let textButton  = AddToPlayListValue.add;

  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i] === id) {
      textButton = AddToPlayListValue.remove;
      break;
    }
  }
  return textButton;
};


export const getSeason = (film: Film, order: number): HTMLElement => {
  const season = createElement('div', { class: 'season collapsed' });
  const titleContainer = createElement('div', { class: 'season__title-container' });
  const title = createElement('div', { class: 'season__title' }, `сезон ${order + 1}`);

  const addingButton = createElement('button', { class: 'adding-button button' });
  const text = createElement('div', {});
  text.innerText = updatePlaylistsButton(`${film.id}-${order}`, 'playlist-serials');
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
    clearElement(addingButton);
    const textButton = createElement('div', {});

    let isFound = false;
    const favorites: string[] = JSON.parse(getValueFromLS('playlist-serials', '[]'));
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i] === `${film.id}-${order}`) {
        favorites.splice(i, 1);
        isFound = true;
      } else {
        console.log(favorites[i] + ' ' + `${film.id}-${order}`);
      }
    }
    if (!isFound) {
      favorites.push(`${film.id}-${order}`);
    }


    localStorage.setItem('playlist-serials', JSON.stringify(favorites));
    textButton.innerText = updatePlaylistsButton(`${film.id}-${order}`, 'playlist-serials');
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
  text.innerText = AddToPlayListValue.add;
  addingButton.append(text);
  titleContainer.append(title, addingButton);
  const seriesContainer = createElement('div', { class: 'season__series' });
  seriesContainer.append(getSerialEpisode(film.id, film.film!));
  filmElement.append(titleContainer, seriesContainer);
  return filmElement;
};
