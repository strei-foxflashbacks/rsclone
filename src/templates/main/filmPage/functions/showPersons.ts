import clearElement from '../../../../helpers/clearElement';
import resetOpen from '../../../../helpers/resetOpen';
import { Film } from '../../../../types/Film';
import { Role } from '../../../../types/Role';
import { FilmCrew } from '../../../../types/types';
import getPersonData from '../person';

const showPersons = (event: Event, film: Film): void => {
  const target = event.target as HTMLElement;
  resetOpen();
  const container = document.querySelector('.container-persons') as HTMLElement;
  clearElement(container);

  const filmCrew = <FilmCrew>target.id;
  const persons: Role[] = film[filmCrew];

  persons.forEach(async person => {
    container.append(await getPersonData(filmCrew, person));
  });

  target.classList.add('open');
};
export default showPersons;
