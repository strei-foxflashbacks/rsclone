import createElement from '../../../../helpers/createElement';
import { Film } from '../../../../types/Film';
import getSerialEpisode from '../../filmPage/serialEpisode';
import { AddToPlayListValue } from '../../../../types/types';
import { deletePlaylistElementFromLS } from './renderSerialInPlaylist';
import { getUser } from '../../../../api/apiUsers';
import handleLogInButton from '../../../header/functions/handleLogInButton';

const renderFilmInPlaylist = (film: Film): HTMLElement => {
  const filmElem = <HTMLElement>createElement('div', { class: 'film' });
  const titleContainer = createElement('div', {
    class: 'serial__title-container',
  });
  const title = createElement(
    'a',
    { class: 'serial__title', href: '#' },
    `${film.name}`,
  );
  const deletingButton = createElement('button', { class: 'adding-button button' }, AddToPlayListValue.remove);

  deletingButton.onclick = async () => {
    if (!await getUser()) {
      handleLogInButton();
      return;
    }
    deletePlaylistElementFromLS(`${film.id}`);
    if (!filmElem.parentElement) {
      throw new Error();
    }
    filmElem.parentElement.removeChild(filmElem);
  };
  titleContainer.append(title, deletingButton);

  const filmContainer = createElement('div', { class: 'serial__series' });
  filmContainer.append(
    getSerialEpisode(film.id, film.film!),
  );

  filmElem.append(titleContainer, filmContainer);
  return filmElem;
};

export default renderFilmInPlaylist;
