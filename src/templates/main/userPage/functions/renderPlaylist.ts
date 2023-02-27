import { getFilm } from '../../../../api/apiFilms';
import { userData } from '../tempData';
import renderFilmInPlaylist from './renderFilmInPlaylist';
import renderSerialInPlaylist from './renderSerialInPlaylist';

const renderPlaylist = (parent: HTMLElement) => {
  const playlistIdsArr = userData.collection.playlist;

  playlistIdsArr.forEach(async (id) => {
    const film = await getFilm(id);

    if (film.type === 'film') {
      parent.append(renderFilmInPlaylist(film));
    } else {
      parent.append(renderSerialInPlaylist(film));
    }
  });
};

export default renderPlaylist;
