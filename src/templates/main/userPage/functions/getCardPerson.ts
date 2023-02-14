import createElement from '../../../../helpers/createElement';
import { Person } from '../../../../types/types';
import { getFavoriteElement } from './getFavoriteElement';

export const getCardPerson = (person: Person): HTMLElement => {
  const card = <HTMLElement>(
    createElement('div', { class: 'card-person card-info' })
  );
  card.style.backgroundImage = `url(${person.img})`;

  const countFilms = createElement(
    'div',
    { class: 'card-person__count' },
    `Работы на Showjet: ${person.filmIds.length}`,
  );

  const favorite = getFavoriteElement();
  favorite.classList.add('card-person__favorite');

  const personDesc = createElement('div', { class: 'card-person__desc' });
  const personName = createElement('div', {
    class: 'card-person__desc-name card-info__title',
  });
  const personNameRus = createElement(
    'div',
    {
      class: 'card-person__desc-name-rus',
    },
    `${person.nameRu}`,
  );
  const personNameEng = createElement(
    'div',
    {
      class: 'card-person__desc-name-eng',
    },
    `${person.nameEn}`,
  );
  personName.append(personNameRus, personNameEng);

  const personProfession = createElement(
    'div',
    {
      class: 'card-person__desc-profession',
    },
    `${person.profession}`,
  );
  personDesc.append(personName, personProfession);

  card.append(countFilms, favorite, personDesc);
  return card;
};
