import createElement from '../../../helpers/createElement';
import getFilmElement from '../films/filmElement';
import { createInfoTable } from './infoTable';
import getGroupOfPosters from './groupOfPosters';
import { getSeason, getFilm } from './season';
import getPersonsElement from './persons';
import openFilmPage from '../films/functions/openFilmPage';
import { getNavigation } from '../navigation';
import { Film } from '../../../types/Film';
import clearElement from '../../../helpers/clearElement';
import { AddToPlayListValue, PlaylistItem } from '../../../types/types';
import getValueFromLS from '../../../components/localStorage/getValueFromLS';

export const updatePlaylistsButton = (film: Film): string => {
  let textButton = AddToPlayListValue.add;

  let isFound = false;
  const favorites: PlaylistItem[] = JSON.parse(getValueFromLS('playlist', '[]'));
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].id === `${film.id}`) {
      textButton = AddToPlayListValue.remove;
      isFound = true;
    }
  }
  if (!isFound) {
    textButton = AddToPlayListValue.add;
  }
  return textButton;
};

const togglePlaylistElementInLS = (film: Film) => {
  let isFound = false;
  const favorites: PlaylistItem[] = JSON.parse(getValueFromLS('playlist', '[]'));
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].id === `${film.id}`) {
      favorites.splice(i, 1);
      isFound = true;
    }
  }
  if (!isFound) {
    favorites.push({ id: `${film.id}`, type: film.type });
  }
  localStorage.setItem('playlist', JSON.stringify(favorites));
};

const getFilmPage = (film: Film): HTMLElement => {
  const wrapper = createElement('div', { class: 'wrapper' });
  const container = createElement('div', { class: 'film-page' });

  const filmElement = getFilmElement(film);
  filmElement.classList.add('film-page__header-margin');

  const navigation = getNavigation(film.name);

  const table = createInfoTable(film);
  const materials = getGroupOfPosters(film);
  const persons = getPersonsElement(film);
  //const comments = getComments();
  //const recommendations = getRecommendations();
  container.append(navigation, filmElement, table, materials);
  const seasonsAndButton = createElement('div', {});
  const seasons = createElement('div', {});


  const addToPlaylistButton = createElement('button', { class: 'adding-button button' });
  const text = createElement('div', {});
  text.innerText = updatePlaylistsButton(film);
  addToPlaylistButton.append(text);

  addToPlaylistButton.addEventListener('click', () => {
    togglePlaylistElementInLS(film);

    clearElement(addToPlaylistButton);
    const textButton = createElement('div', {});
    textButton.innerText = updatePlaylistsButton(film);
    addToPlaylistButton.append(textButton);
  });


  if (film.type === 'film') {
    container.append(getFilm(film));
  } else {
    for (let i = 0; i < film.serial!.seasonsQty; i++) {
      seasons.append(getSeason(film, i));
    }
  }
  seasonsAndButton.append(addToPlaylistButton, seasons);

  filmElement.removeEventListener('click', openFilmPage);

  //container.append(persons, comments, recommendations);
  container.append(seasonsAndButton, persons);

  wrapper.append(container);
  return wrapper;
};


export default getFilmPage;
