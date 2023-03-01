import { getFilm } from '../../../../api/apiFilms';
import renderFilmInPlaylist from './renderFilmInPlaylist';
import renderSerialInPlaylist from './renderSerialInPlaylist';
import getValueFromLS from '../../../../components/localStorage/getValueFromLS';
import { PlaylistItem } from '../../../../types/types';

const renderPlaylist = (parent: HTMLElement) => {
  const favorites = JSON.parse(getValueFromLS('playlist', '[]'));

  favorites.forEach(async (item: PlaylistItem) => {
    const film = await getFilm(Number(item.id));

    if (film.type === 'film') {
      parent.append(renderFilmInPlaylist(film));
    } else {
      parent.append(renderSerialInPlaylist(film));
    }
  });
};

export default renderPlaylist;
