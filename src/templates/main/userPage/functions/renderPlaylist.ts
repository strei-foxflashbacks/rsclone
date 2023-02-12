import { filmmm, ser } from '../tempData';
import renderFilmInPlaylist from './renderFilmInPlaylist';
import renderSerialInPlaylist from './renderSerialInPlaylist';

const renderPlaylist = (parent: HTMLElement) => {
  // const playlistArr = getPlaylistFromServer(id);
  // const playlist = {
  //   films: [1, 4],
  //   serials: [1, 3],
  // };

  const playlistArr = [ser, filmmm, ser, ser, filmmm, filmmm];

  playlistArr.forEach((item) => {
    if (item.type === 'film') {
      parent.append(renderFilmInPlaylist(item));
    } else {
      parent.append(renderSerialInPlaylist(item));
    }
  });
};

export default renderPlaylist;
