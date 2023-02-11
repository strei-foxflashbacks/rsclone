import clearElement from '../../../../helpers/clearElement';
import resetOpen from '../../../../helpers/resetOpen';
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
      break;
    case 'serials':
      break;
    case 'persons':
      break;
    case 'profile':
      break;
  }
};

export default renderContest;
