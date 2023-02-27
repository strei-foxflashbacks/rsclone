import createElement from '../../../helpers/createElement';
import { Person } from '../../../types/Person';
import { getFilmsById } from '../../../api/apiFilms';
import getCardFavoriteFilmSerial from '../userPage/functions/getCardFilmSerial';
import { getFavoriteElement } from '../userPage/functions/getFavoriteElement';
import { toggleFavoritesInLS, updateFavoritesButton } from '../filmPage/functions/handleAddingToFavorites';
import { Page } from '../../../types/types';

const getPersonPage = (person: Person): HTMLElement => {
  const wrapper = createElement('div', { class: 'wrapper' });
  const container = createElement('div', { class: 'person-page' });
  const filmsContainer = createElement('div', { class: 'person-page__films' });

  const personCard = <HTMLElement>(
    createElement('div', { class: 'card-person card-info' })
  );
  personCard.style.backgroundImage = `url(${person.img || '/assets/smallAvatar.svg'})`;

  let srcForIcon = updateFavoritesButton(String(person.id), 'favorites-persons');
  const favorite = getFavoriteElement();
  favorite.style.backgroundImage = `url('${srcForIcon}')`;
  favorite.classList.add('card-person__favorite');

  favorite.addEventListener('click', () => {
    toggleFavoritesInLS(String(person.id), 'favorites-persons');
    srcForIcon = updateFavoritesButton(String(person.id), 'favorites-persons');
    favorite.style.backgroundImage = `url('${srcForIcon}')`;
  });
  personCard.append(favorite);

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
  personCard.append(personDesc);

  if (person.birth) {
    const birth = createElement('div', { class: 'person-page__birth' }, person.birth);
    personCard.append(birth);
  }

  const worksTitle = createElement('div', { class: 'person-page__title' }, 'работы на showJet');

  container.append(personCard, worksTitle);
  const filmsIds: number[] = person.filmIds;
  const filmsById = getFilmsById(filmsIds);
  filmsById.then(films => films.forEach(film => {
    filmsContainer.append(getCardFavoriteFilmSerial(film, Page.personPage));
  }));
  container.append(filmsContainer);

  wrapper.append(container);
  return wrapper;
};


export default getPersonPage;
