import createElement from '../../../../helpers/createElement';
import { Person } from '../../../../types/Person';
import { getFavoriteElement } from './getFavoriteElement';
import router from '../../../../components/router/router';
import { updateFavoritesButton } from '../../filmPage/functions/handleAddingToFavorites';
import { deleteFavoriteElemFromPage, deleteFavoritesElementFromLS } from '../../films/functions/deleteFromFavorites';


export const getCardPerson = (person: Person): HTMLElement => {
  const card = <HTMLElement>(
    createElement('div', { class: 'card-person card-info' })
  );
  card.style.backgroundImage = `url(${person.img || '/assets/smallAvatar.svg'})`;

  const countFilms = createElement(
    'div',
    { class: 'card-person__count' },
    `Работы на Showjet: ${person.filmIds.length}`,
  );

  const favorite = getFavoriteElement();
  favorite.classList.add('card-person__favorite');
  favorite.onclick = () => {
    deleteFavoritesElementFromLS(`${person.id}`, 'favorites-persons');
    deleteFavoriteElemFromPage(favorite);
  };

  const srcForIcon = updateFavoritesButton(String(person.id), 'favorites-persons');
  favorite.style.backgroundImage = `url('${srcForIcon}')`;

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

  card.addEventListener('click', (e: Event) => {
    const target = <HTMLElement>e.target;
    if (target.classList.contains('card-person__favorite')) return;
    router.navigateTo(`/person/${person.id}`);
  });
  return card;
};
