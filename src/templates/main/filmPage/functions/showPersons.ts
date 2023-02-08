import clearElement from '../../../../helpers/clearElement';
import getPerson from '../person';

const showPersons = (event: Event): void => {
  const target = event.target as HTMLElement;
  const container = document.querySelector('.container-persons') as HTMLElement;

  const selectedSection = target.id;

  clearElement(container);
  container.append(getPerson(selectedSection));

//проверить что это не тот же нажатый элемент
  //очистить текущий контейнер персонажей,
  //получить нужный раздел по классу нажатого элемента, отрисовать
};
export default showPersons;
