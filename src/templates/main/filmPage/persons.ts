import createElement from '../../../helpers/createElement';
import { Film } from '../../../types/Film';
import { Role } from '../../../types/Role';
import showPersons from './functions/showPersons';
import getPersonData from './person';

const getPersonsElement = (film: Film): HTMLElement => {
  const container = createElement('div', { class: 'persons' });
  const titleActors = createElement(
    'div',
    { class: 'persons__title nav__title open', id: 'actors' },
    'в ролях',
  );
  const titleDirectors = createElement(
    'div',
    { class: 'persons__title nav__title', id: 'director' },
    'режиссеры',
  );
  const titleProducers = createElement(
    'div',
    { class: 'persons__title nav__title', id: 'producers' },
    'продюсеры',
  );
  const containerTitles = createElement('div', {
    class: 'persons__titles nav__titles',
  });

  const containerPersons = createElement('div', { class: 'container-persons' });

  containerTitles.append(titleActors, titleDirectors, titleProducers);

  container.append(containerTitles, containerPersons);

  titleActors.addEventListener('click', (e: Event) => {
    showPersons(e, film);
  });
  titleDirectors.addEventListener('click', (e: Event) => {
    showPersons(e, film);
  });
  titleProducers.addEventListener('click', (e: Event) => {
    showPersons(e, film);
  });
  const persons: Role[] = film.actors;
  persons.forEach(async person => {
    containerPersons.append(await getPersonData('actors', person));
  });
  return container;
};

export default getPersonsElement;
