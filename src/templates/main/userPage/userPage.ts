import createElement from '../../../helpers/createElement';
import renderContest from './functions/renderContent';
import renderPlaylist from './functions/renderPlaylist';
import './_user-page.scss';
import { getNavigation } from '../navigation';

enum UserPageTitles {
  playlist = 'Плейлист',
  films = 'Фильмы',
  serials = 'Сериалы',
  persons = 'Персоны',
  profile = 'Профиль',
}

const getUserPage = (): HTMLElement => {
  const container = createElement('div', { class: 'wrapper' });
  const userPageContainer = createElement('div', {
    class: 'user-page__container',
  });

  const navigation = getNavigation('Мой профиль');

  const userPage = createElement('div', { class: 'user-page' });
  const userPageTitles = createElement('div', {
    class: 'user-page__titles nav__titles',
  });

  const playlistTitle = createElement(
    'div',
    { class: 'user-page__title nav__title open', id: 'playlist' },
    UserPageTitles.playlist,
  );
  const filmsTitle = createElement(
    'div',
    { class: 'user-page__title nav__title', id: 'films' },
    UserPageTitles.films,
  );
  const serialsTitle = createElement(
    'div',
    { class: 'user-page__title nav__title', id: 'serials' },
    UserPageTitles.serials,
  );
  const personsTitle = createElement(
    'div',
    { class: 'user-page__title nav__title', id: 'persons' },
    UserPageTitles.persons,
  );
  const profileTitle = createElement(
    'div',
    { class: 'user-page__title nav__title', id: 'profile' },
    UserPageTitles.profile,
  );
  userPageTitles.append(
    playlistTitle,
    filmsTitle,
    serialsTitle,
    personsTitle,
    profileTitle,
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
  container.append(userPageContainer);
  return container;
};

export default getUserPage;
