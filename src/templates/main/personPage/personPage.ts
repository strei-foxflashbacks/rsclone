import createElement from '../../../helpers/createElement';
import { Person } from '../../../types/Person';
import { getCardPerson } from '../userPage/functions/getCardPerson';
import { getFilmsById } from '../../../api/apiFilms';
import getCardFavoriteFilmSerial from '../userPage/functions/getCardFilmSerial';

const getPersonPage = (person: Person): HTMLElement => {
  const wrapper = createElement('div', { class: 'wrapper' });
  const container = createElement('div', { class: 'person-page' });
  const filmsContainer = createElement('div', { class: 'person-page__films' });
  const personCard = getCardPerson(person);
  if (person.birth) {
    const birth = createElement('div', { class: 'person-page__birth' }, person.birth);
    personCard.append(birth);
  }

  const worksTitle = createElement('div', { class: 'person-page__title' }, 'работы на showJet');

  container.append(personCard, worksTitle);
  const filmsIds: number[] = person.filmIds;
  const filmsById = getFilmsById(filmsIds);
  filmsById.then(films => films.forEach(film => {
    filmsContainer.append(getCardFavoriteFilmSerial(film));
  }));
  container.append(filmsContainer);

  wrapper.append(container);
  return wrapper;
};

export default getPersonPage;
