import clearElement from '../../../../helpers/clearElement';
import resetOpen from '../../../../helpers/resetOpen';
import getPerson from '../person';

const showPersons = (event: Event): void => {
  const target = event.target as HTMLElement;
  resetOpen();
  const container = document.querySelector('.container-persons') as HTMLElement;

  const selectedSection = target.id;

  clearElement(container);
  for (let i = 0; i < 10; i++) {
    container.append(getPerson(selectedSection));
  }
  target.classList.add('open');
};
export default showPersons;
