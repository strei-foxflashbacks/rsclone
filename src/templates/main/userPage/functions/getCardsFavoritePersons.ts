import { getPerson } from '../../../../api/apiPersons';
import createElement from '../../../../helpers/createElement';
import { userData } from '../tempData';
import { getCardPerson } from './getCardPerson';

export const getCardsFavoritePersons = (): HTMLElement => {
  const favoritePersonsId = userData.collection.persons;

  const cardsContainer = <HTMLElement>(
    createElement('div', { class: 'favorite-container' })
  );

  favoritePersonsId.forEach(async (id) => {
    const person = await getPerson(id);
    cardsContainer.append(getCardPerson(person));
  });

  return cardsContainer;
};
