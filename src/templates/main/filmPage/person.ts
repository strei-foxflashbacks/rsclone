import createElement from '../../../helpers/createElement';
const getPerson = (type: string): HTMLElement => {
  const container = createElement('div', { class: `${type}` });
  for (let i = 0; i < 5; i++) {
    const containerActor = createElement('div', { class: 'person__container' });
    const person = createElement('div', { class: 'person__item' });

    let portraitUrl = '';
    let name: string;
    let filmNameValue: string;

    if (type === 'producers') {
      portraitUrl = 'url(\'./assets/news1.jpg\')';
      name = 'Rick';
      filmNameValue = 'Fufel Rick';
    } else if (type === 'actors') {
      //portraitUrl = 'url(\'./assets/misicks.webp\')';
      name = 'mr. Misicks';
      filmNameValue = 'Misicks';
    } else {
      portraitUrl = 'url(\'./assets/news1.jpg\')';
      name = 'Mr. Poopybutthole';
      filmNameValue = 'Jschk';
    }

    person.style.backgroundImage = portraitUrl;
    const containerNames = createElement('div', { class: 'person__names' });
    const realName = createElement('div', { class: 'person__real-name' }, name);
    const filmName = createElement('div', { class: 'person__film-name' }, filmNameValue);
    containerNames.append(realName, filmName);
    containerActor.append(person, containerNames);
    container.append(containerActor);
  }

  return container;
};
export default getPerson;
