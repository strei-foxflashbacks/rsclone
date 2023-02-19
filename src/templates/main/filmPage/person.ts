import createElement from '../../../helpers/createElement';
const getPerson = (type: string): HTMLElement => {
  const container = createElement('div', { class: `${type} person` });
  const containerActor = createElement('div', { class: 'person__container' });
  const person = createElement('div', { class: 'person__item' });

  const portraitUrl = 'url(\'/assets/person.jpg\')';
  const name = 'Василий Иванович Петров';
  const filmNameValue = 'Петр Васильевич Иванов';


  person.style.backgroundImage = portraitUrl;
  const containerNames = createElement('div', { class: 'person__names' });
  const realName = createElement('div', { class: 'person__real-name' }, name);
  const filmName = createElement('div', { class: 'person__film-name' }, filmNameValue);
  containerNames.append(realName, filmName);
  containerActor.append(person, containerNames);
  container.append(containerActor);

  return container;
};
export default getPerson;
