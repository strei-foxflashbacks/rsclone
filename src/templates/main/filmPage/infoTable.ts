import createElement from '../../../helpers/createElement';
import { temp } from '../../../components/controllers/filmPageController';
import setThemeStyles from '../../../components/themes/functions/setThemeStyles';

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


export function createInfoTable(): HTMLElement {
  const info = createElement('table', { class: 'film-page__table' });
  const infoBody = createElement('tbody', {});

  const tRow1 = createElement('tr', { class: 'film-page__tr' });
  setThemeStyles(tRow1);
  const th1 = createElement('td', { class: 'film-page__th film-page__column' }, 'Жанры');
  const th2 = createElement('td', { class: 'film-page__title' }, 'описание');
  tRow1.append(th1, th2);

  const tRow2 = createElement('tr', { class: 'film-page__tr' });
  const td1 = createElement('td', { class: 'film-page__td' }, `${temp.genres}`);
  const td2 = createElement('td', { class: 'film-page__td', rowspan: '7' }, 'Для поклонников культового сериала «Касл»:\' +\n' +
    '  //   \' испанская комедия о том, как женщина-детектив пытается совместить работу, развод и воспитание близнецов.\\n\' +\n' +
    '  //   \'Лаура — уважаемый детектив с идеальной интуицией, который одинаково хорошо может справиться как с хитрым продавцом в мясном магазине,\' +\n' +
    '  //   \' так и с опасным преступником. Неудачи настигают женщину только в личной жизни: сыновья-близнецы сводят с ума проделками,\' +\n' +
    '  //   \' экс-супруг стал начальником, и активно пытается помириться, а коллега Мартин, который нравится Лауре ещё со времен академии,\' +\n' +
    '  //   \' относится к ней как к подруге, отдавая предпочтение сексапильным свидетельницам.\\n\' +\n' +
    '  //   \'Поможет ли шестое чувство Лауры стать ей не только счастливым профессионалом, но и счастливой женщиной?');
  td2.classList.add('film-page__text');
  tRow2.append(td1, td2);

  const tRow3 = createTitleRow('Релиз');

  const tRow4 = createValueRow(`${temp.release}`);

  const tRow5 = createTitleRow('аудио');

  const tRow6 = createValueRow(`${temp.audio}`);

  const tRow7 = createTitleRow('Страны');

  const tRow8 = createValueRow(`${temp.countries}`);

  infoBody.append(tRow1, tRow2, tRow3, tRow4, tRow5, tRow6, tRow7, tRow8);
  info.append(infoBody);
  return info;
}
