import createElement from '../../../helpers/createElement';
import { temp } from '../../../components/controllers/filmPageController';

export function createInfoTable(): HTMLElement {
  const info = createElement('table', { class: 'film-page__table' });
  const infoBody = createElement('tbody', {});

  const tRow1 = createElement('tr', { class: 'film-page__tr' });
  const th1 = createElement('td', { class: 'film-page__th' }, 'Жанры');
  th1.classList.add('film-page__column');
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

  const tRow3 = createElement('tr', { class: 'film-page__tr' });
  const th3 = createElement('th', { class: 'film-page__th' }, 'Релиз');
  tRow3.append(th3);

  const tRow4 = createElement('tr', { class: 'film-page__tr' });
  const td3 = createElement('td', { class: 'film-page__td' }, `${temp.release}`);
  tRow4.append(td3);


  const tRow5 = createElement('tr', { class: 'film-page__tr' });
  const th4 = createElement('th', { class: 'film-page__th' }, 'аудио');
  tRow5.append(th4);

  const tRow6 = createElement('tr', { class: 'film-page__tr' });
  const td5 = createElement('td', { class: 'film-page__td' }, `${temp.audio}`);
  tRow6.append(td5);

  const tRow7 = createElement('tr', { class: 'film-page__tr' });
  const th6 = createElement('th', { class: 'film-page__th' }, 'Страны');
  tRow7.append(th6);

  const tRow8 = createElement('tr', { class: 'film-page__tr' });
  const td6 = createElement('td', { class: 'film-page__td' }, `${temp.countries}`);
  tRow8.append(td6);

  infoBody.append(tRow1, tRow2, tRow3, tRow4, tRow5, tRow6, tRow7, tRow8);
  info.append(infoBody);
  return info;
}
