/* eslint-disable @typescript-eslint/comma-dangle */
import clearElement from '../../../helpers/clearElement';
import createElement from '../../../helpers/createElement';
import './_user-page.scss';

// enum InfoNavigation {
//   playlist = 'Плейлист',
//   serials = 'Сериалы',
//   films = 'Фильмы',
//   persons = 'Актеры',
//   profile = 'Профиль',
// }

// type InfoNavigationArray =
//   | 'playlist'
//   | 'serials'
//   | 'films'
//   | 'persons'
//   | 'profile';

// const infoNavigationArray: InfoNavigationArray[] = [
//   'playlist',
//   'serials',
//   'films',
//   'persons',
//   'profile',
// ];

const userPage = () => {
  const main = document.querySelector('main');
  if (!main) {
    throw new Error('main is not found!');
  }
  clearElement(main);

  const userPageContainer = createElement('div', { class: 'user-page' });
  const navigation = createElement('div', { class: 'navigation' });
  const elementNavigation = createElement(
    'a',
    { class: 'navigation__item', href: '#' },
    'Главная'
  );
  const elementNavigation2 = createElement(
    'a',
    { class: 'navigation__item', href: '#' },
    'Мой контент'
  );
  navigation.append(elementNavigation, elementNavigation2);

  const infoContainer = createElement('div', { class: 'user-page__info' });
  // const infoNavigation = createElement('div', {
  //   class: 'user-page__info-navigation',
  // });
  // infoNavigationArray.forEach((nav) => {
  //   const infoNavigationItem = createElement(
  //     'div',
  //     { class: 'info-navigation__item' },
  //     `${InfoNavigation[nav].toUpperCase()}`
  //   );
  //   infoNavigation.append(infoNavigationItem);
  // });
  // infoContainer.append(infoNavigation);

  userPageContainer.append(navigation, infoContainer);
  main.append(userPageContainer);
};

export default userPage;
