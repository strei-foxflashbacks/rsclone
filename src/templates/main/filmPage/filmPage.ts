import createElement from '../../../helpers/createElement';
import { IFilmResponse } from '../../../types/IFilmResponse';
import getFilmElement from '../films/filmElement';
import { temp } from '../../../components/controllers/filmPageController';

const getFilmPage = (elem: IFilmResponse): HTMLElement => {
  const container = createElement('div', { class: 'film-page' });
  //добавить компонент крошек

  const filmElement = getFilmElement(elem.path, elem.title, elem.titleEng, elem.rating, elem.note, elem.id);
  filmElement.classList.add('film-page__header-margin');

  const info = createElement('table', { class: 'film-page__info' });
  const infoBody = createElement('tbody', {});

  const thGenres = createElement('th', { class: 'film-page__th' }, 'Жанры');
  const tdGenres = createElement('td', { class: 'film-page__td' }, `${temp.genres}`);
  const trGenres = createElement('tr', { class: 'film-page__tr' });
  trGenres.append(tdGenres);


  const thRelease = createElement('th', { class: 'film-page__th' }, 'Релиз');
  const tdRelease = createElement('td', { class: 'film-page__td' }, `${temp.release}`);
  const trRelease = createElement('tr', { class: 'film-page__tr' });
  trRelease.append(tdRelease);

  const thAudio = createElement('th', { class: 'film-page__th' }, 'Аудио');
  const tdAudio = createElement('td', { class: 'film-page__td' }, `${temp.audio}`);
  const trAudio = createElement('tr', { class: 'film-page__tr' });
  trAudio.append(tdAudio);

  const thCountries = createElement('th', { class: 'film-page__th' }, 'Страны');
  const tdCountries = createElement('td', { class: 'film-page__td' });
  const trCountries = createElement('tr', { class: 'film-page__tr' }, `${temp.countries}`);
  trCountries.append(tdCountries);

  infoBody.append(thGenres, trGenres, thRelease, trRelease, thAudio, trAudio, thCountries, trCountries);
  info.append(infoBody);

  container.append(filmElement, info);
  return container;
};

export default getFilmPage;
