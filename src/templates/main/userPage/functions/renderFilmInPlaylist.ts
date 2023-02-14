import createElement from '../../../../helpers/createElement';
import { AddToPlayListValue, Film } from '../../../../types/types';
import getAddOrRemoveButton from '../../filmPage/addOrRemoveButton';
import getSerialEpisode from '../../filmPage/serialEpisode';

const renderFilmInPlaylist = (filmData: Film): HTMLElement => {
  const film = <HTMLElement>createElement('div', { class: 'film' });
  const titleContainer = createElement('div', {
    class: 'serial__title-container',
  });
  const title = createElement(
    'a',
    { class: 'serial__title', href: '#' },
    `${filmData.name}`,
  );
  const addingButton = getAddOrRemoveButton(
    './assets/minus.svg',
    AddToPlayListValue.remove,
  );
  titleContainer.append(title, addingButton);

  const filmContainer = createElement('div', { class: 'serial__series' });
  filmContainer.append(
    getSerialEpisode(0, `${filmData.name}`, Math.random() <= 0.5 ? true : false),
  );

  film.append(titleContainer, filmContainer);
  return film;
};

export default renderFilmInPlaylist;
