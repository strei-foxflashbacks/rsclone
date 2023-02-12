/* eslint-disable @typescript-eslint/comma-dangle */
import clearElement from '../../../helpers/clearElement';
import createElement from '../../../helpers/createElement';
import renderContest from './functions/renderContent';
import renderPlaylist from './functions/renderPlaylist';
import './_user-page.scss';

enum UserPageTitles {
  playlist = 'Плейлист',
  films = 'Фильмы',
  serials = 'Сериалы',
  persons = 'Персоны',
  profile = 'Профиль',
}

const getUserPage = () => {
  const main = document.querySelector('main');
  if (!main) {
    throw new Error('main is not found!');
  }
  clearElement(main);

  const userPageContainer = createElement('div', {
    class: 'user-page__container',
  });
  const navigation = createElement('div', { class: 'navigation' });
  const elementNavigation = createElement(
    'a',
    { class: 'navigation__item', href: '#' },
    'Главная'
  );
  const elementNavigation2 = createElement(
    'a',
    { class: 'navigation__item', href: '#' },
    'Мой контент и профиль'
  );
  navigation.append(elementNavigation, elementNavigation2);

  const userPage = createElement('div', { class: 'user-page' });
  const userPageTitles = createElement('div', {
    class: 'user-page__titles nav__titles',
  });

  const playlistTitle = createElement(
    'div',
    { class: 'user-page__title nav__title open', id: 'playlist' },
    UserPageTitles.playlist
  );
  const filmsTitle = createElement(
    'div',
    { class: 'user-page__title nav__title', id: 'films' },
    UserPageTitles.films
  );
  const serialsTitle = createElement(
    'div',
    { class: 'user-page__title nav__title', id: 'serials' },
    UserPageTitles.serials
  );
  const personsTitle = createElement(
    'div',
    { class: 'user-page__title nav__title', id: 'persons' },
    UserPageTitles.persons
  );
  const profileTitle = createElement(
    'div',
    { class: 'user-page__title nav__title', id: 'profile' },
    UserPageTitles.profile
  );
  userPageTitles.append(
    playlistTitle,
    filmsTitle,
    serialsTitle,
    personsTitle,
    profileTitle
  );
  playlistTitle.addEventListener('click', renderContest);
  filmsTitle.addEventListener('click', renderContest);
  serialsTitle.addEventListener('click', renderContest);
  personsTitle.addEventListener('click', renderContest);
  profileTitle.addEventListener('click', renderContest);

  const userPageContent = createElement('div', { class: 'user-page__content' });
  renderPlaylist(userPageContent);
  userPage.append(userPageTitles, userPageContent);

  userPageContainer.append(navigation, userPage);
  main.append(userPageContainer);
};

export default getUserPage;
