import clearElement from '../../../../helpers/clearElement';
import resetOpen from '../../../../helpers/resetOpen';
import getCardsFavorite from './getCardsFavorite';
import { getCardsFavoritePersons } from './getCardsFavoritePersons';
import { getProfileElement } from './getProfileElement';
import renderPlaylist from './renderPlaylist';

const renderContest = (e: Event) => {
  resetOpen();
  const userPageContent = <HTMLElement>(
    document.querySelector('.user-page__content')
  );
  if (!userPageContent) throw new Error('user page content is not found!');
  clearElement(userPageContent);

  const target = <HTMLElement>e.target;
  target.classList.add('open');

  switch (target.id) {
    case 'playlist':
      renderPlaylist(userPageContent);
      break;
    case 'films':
      userPageContent.append(getCardsFavorite('film'));
      break;
    case 'serials':
      userPageContent.append(getCardsFavorite('serial'));
      break;
    case 'persons':
      userPageContent.append(getCardsFavoritePersons());
      break;
    case 'profile':
      userPageContent.append(getProfileElement());
      break;
  }
};

export default renderContest;
