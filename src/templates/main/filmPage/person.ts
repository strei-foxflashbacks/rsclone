import { getPerson } from '../../../api/apiPersons';
import createElement from '../../../helpers/createElement';
import { Person } from '../../../types/Person';
import { Role } from '../../../types/Role';
import { FilmCrew } from '../../../types/types';
import router from '../../../components/router/router';

const getPersonData = async (type: FilmCrew, role: Role): Promise<HTMLElement> => {
  const container = createElement('div', { class: `${type} person` });
  const containerActor = createElement('div', { class: 'person__container' });
  const personItem = createElement('div', { class: 'person__item' });

  const person: Person = await getPerson(role.personId);

  const portraitUrl = `url(${person.imgMin || '/assets/smallAvatar.svg'})`;
  const name = person.nameRu;
  const filmNameValue = role.role;

  personItem.style.backgroundImage = portraitUrl;
  const containerNames = createElement('div', { class: 'person__names' });
  const realName = createElement('div', { class: 'person__real-name' }, name);
  const filmName = createElement('div', { class: 'person__film-name' }, filmNameValue);
  containerNames.append(realName, filmName);
  containerActor.append(personItem, containerNames);
  container.append(containerActor);
  container.addEventListener('click', () => {
    router.navigateTo(`/person/${person.id}`);
  });

  return container;
};
export default getPersonData;
