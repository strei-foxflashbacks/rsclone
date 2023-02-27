import { getPerson } from '../../../../api/apiPersons';
import createElement from '../../../../helpers/createElement';
import { getCardPerson } from './getCardPerson';
import getValueFromLS from '../../../../components/localStorage/getValueFromLS';
import { Person } from '../../../../types/Person';

export const getCardsFavoritePersons = (): HTMLElement => {

  const cardsContainer = <HTMLElement>(
    createElement('div', { class: 'favorite-container' })
  );

  const favorites = JSON.parse(getValueFromLS('favorites-persons'));


  favorites.forEach(async (id: string) => {
    const idPerson = Number(id);
    const person: Person = await getPerson(idPerson);

    cardsContainer.append(getCardPerson(person));
  });

  return cardsContainer;
};
