import createElement from '../../../helpers/createElement';
import { Person } from '../../../types/Person';
import { getCardPerson } from '../userPage/functions/getCardPerson';

const getPersonPage = (person: Person): HTMLElement => {
  const wrapper = createElement('div', { class: 'wrapper' });
  const container = createElement('div', { class: 'person-page' });
  const personCard = getCardPerson(person);
  if (person.birth) {
    const birth = createElement('div', { class: 'person-page__birth' }, person.birth);
    personCard.append(birth);
  }

  const worksTitle = createElement('div', { class: 'person-page__title' }, 'работы на showJet');

  container.append(personCard, worksTitle);
  wrapper.append(container);
  return wrapper;
};

export default getPersonPage;
