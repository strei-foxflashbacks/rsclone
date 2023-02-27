import createElement from '../../../helpers/createElement';
import { Film } from '../../../types/Film';

const createTitleRow = (title: string): HTMLElement => {
  const tRow = createElement('tr', { class: 'film-page__tr' });
  const th = createElement('th', { class: 'film-page__th' }, title);
  tRow.append(th);
  return tRow;
};

const createValueRow = (value: string): HTMLElement => {
  const tRow = createElement('tr', { class: 'film-page__tr' });
  const th = createElement('td', { class: 'film-page__td' }, value);
  tRow.append(th);
  return tRow;
};

export function createInfoTable(film: Film): HTMLElement {
  const info = createElement('table', { class: 'film-page__table' });
  const infoBody = createElement('tbody', {});

  const tRow1 = createElement('tr', { class: 'film-page__tr' });
  const th1 = createElement('td', { class: 'film-page__th film-page__column' }, 'Жанры');
  const th2 = createElement('td', { class: 'film-page__title' }, 'описание');
  tRow1.append(th1, th2);

  const tRow2 = createElement('tr', { class: 'film-page__tr' });
  const td1 = createElement('td', { class: 'film-page__td' }, `${film.genre}`);
  const td2 = createElement('td', { class: 'film-page__td', rowspan: '7' }, `${film.description}`);
  td2.classList.add('film-page__text');
  tRow2.append(td1, td2);

  const tRow3 = createTitleRow('Релиз');

  const tRow4 = createValueRow(`${film.release.join(' - ')}`);

  const tRow5 = createTitleRow('аудио');

  const tRow6 = createValueRow(`${film.audio}`);

  const tRow7 = createTitleRow('Страны');

  const tRow8 = createValueRow(`${film.countries}`);

  infoBody.append(tRow1, tRow2, tRow3, tRow4, tRow5, tRow6, tRow7, tRow8);
  info.append(infoBody);
  return info;
}
