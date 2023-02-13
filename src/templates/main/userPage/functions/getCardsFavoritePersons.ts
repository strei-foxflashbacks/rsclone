import createElement from '../../../../helpers/createElement';
import { Person } from '../../../../types/types';
import { person1 } from '../tempData';
import { getCardPerson } from './getCardPerson';

export const getCardsFavoritePersons = (): HTMLElement => {
  const persons: Person[] = [
    person1,
    person1,
    person1,
    person1,
    person1,
    person1,
  ];

  const cardsContainer = <HTMLElement>(
    createElement('div', { class: 'favorite-container' })
  );

  persons.forEach((person) => {
    cardsContainer.append(getCardPerson(person));
  });

  return cardsContainer;
};
