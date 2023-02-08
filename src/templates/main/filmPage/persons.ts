import createElement from '../../../helpers/createElement';
import showPersons from './functions/showPersons';

const getPersons = (): HTMLElement => {
  const container = createElement('div', { class: 'persons' });
  const titleActors = createElement('div', { class: 'persons__title', id: 'actors' }, 'в ролях');
  const titleDirectors = createElement('div', { class: 'persons__title', id: 'directors' }, 'режиссеры');
  const titleProducers = createElement('div', { class: 'persons__title', id: 'producers' }, 'продюсеры');
  const containerTitles = createElement('div', { class: 'persons__titles' });

  const containerPersons = createElement('div', { class: 'container-persons' });

  containerTitles.append(titleActors, titleDirectors, titleProducers);

  container.append(containerTitles, containerPersons);

  titleActors.addEventListener('click', showPersons);
  titleDirectors.addEventListener('click', showPersons);
  titleProducers.addEventListener('click', showPersons);
  return container;
};


export default getPersons;
