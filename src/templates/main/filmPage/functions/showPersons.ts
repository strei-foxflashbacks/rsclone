import clearElement from '../../../../helpers/clearElement';
import getPerson from '../person';

const showPersons = (event: Event): void => {
  const target = event.target as HTMLElement;
  const personsTitle = document.querySelectorAll('.persons__title');
  console.log(personsTitle);
  personsTitle.forEach(title => {
    title.classList.remove('open');
  });
  const container = document.querySelector('.container-persons') as HTMLElement;

  const selectedSection = target.id;

  clearElement(container);
  for (let i = 0; i < 10; i++) {
    container.append(getPerson(selectedSection));
  }
  target.classList.add('open');
};
export default showPersons;
