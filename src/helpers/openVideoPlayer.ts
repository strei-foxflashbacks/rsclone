import { getFilm } from '../api/apiFilms';
import videoPlayerRender from '../components/modals/videoplayer/videoPlayer';
import { Episode } from '../types/Episode';
import createElement from './createElement';

export const openVideoPlayer = async () => {
  const body = document.body;
  let modalPlayer = <HTMLElement>document.querySelector('.modal-player');
  if (!modalPlayer)
    modalPlayer = createElement('div', { class: 'modal-player' });
  document.body.append(modalPlayer);

  const film = await getFilm(1);
  const season = 0;
  const episodeNumber = 0;
  
  const episode: Episode = film.type === 'film' 
    ? film.film! 
    : film.serial!.seasons[season].episodes[episodeNumber];
  body.style.overflowY = 'hidden';
  modalPlayer.style.display = 'block';  
  modalPlayer.append(videoPlayerRender(episode));
};
