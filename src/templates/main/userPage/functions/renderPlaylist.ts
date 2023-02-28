import { getFilm } from '../../../../api/apiFilms';
import renderFilmInPlaylist from './renderFilmInPlaylist';
import renderSerialInPlaylist from './renderSerialInPlaylist';
import getValueFromLS from '../../../../components/localStorage/getValueFromLS';

const renderPlaylist = (parent: HTMLElement) => {
  const favorites = JSON.parse(getValueFromLS('playlist-serials', '[]'));
  if (favorites.length === 0) {
    console.log(0);
  }

  favorites.forEach(async (id: string) => {
    const film = await getFilm(Number(id));

    if (film.type === 'film') {
      parent.append(renderFilmInPlaylist(film));
    } else {
      parent.append(renderSerialInPlaylist(film));
    }
  });
};

export default renderPlaylist;
