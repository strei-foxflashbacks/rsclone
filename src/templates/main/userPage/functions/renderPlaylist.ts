import { Film } from '../../../../types/types';
import renderSerialInPlaylist from './renderSerialInPlaylist';

const ser: Film = {
  id: 1,
  name: 'Good doctor',
  src: '',
  poster: '',
  trailer: '',
  thumbnails: [''],
  description: '',
  rating: 5,
  reviews: [''],
  genre: '',
  type: 'serial',
  serial: {
    season: [1, 2],
    episode: [1, 2, 3, 4],
  },
};
const filmmm: Film = {
  id: 1,
  name: 'Avatar',
  src: '',
  poster: '',
  trailer: '',
  thumbnails: [''],
  description: '',
  rating: 5,
  reviews: [''],
  genre: '',
  type: 'film',
};

const renderPlaylist = (parent: HTMLElement) => {
  // const playlistArr = getPlaylistFromServer(id);
  // const playlist = {
  //   films: [1, 4],
  //   serials: [1, 3],
  // };

  const playlistArr = [ser, ser, ser, filmmm, filmmm, filmmm];

  playlistArr.forEach((item) => {
    if (item.type === 'film') {
      // parent.append(renderFilmInPlaylist());
    } else {
      parent.append(renderSerialInPlaylist(item));
    }
  });
};

export default renderPlaylist;
