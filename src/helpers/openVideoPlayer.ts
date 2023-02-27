import { getFilm } from '../api/apiFilms';
import videoPlayerRender from '../components/modals/videoplayer/videoPlayer';
import { Episode } from '../types/Episode';
import createElement from './createElement';
import hideBody from './hideBody';

export const openVideoPlayer = async (id: number, isTrailer: boolean, season?: number, order?: number) => {
  let modalPlayer = <HTMLElement>document.querySelector('.modal-player');
  if (!modalPlayer)
    modalPlayer = createElement('div', { class: 'modal-player' });
  document.body.append(modalPlayer);
  const film = await getFilm(id);
  
  let episode: Episode;
  if (isTrailer) episode = film.trailer[0];
  else if (film.type === 'film') episode = film.film!;
  else episode = film.serial!.seasons[season! - 1].episodes[order! - 1];
    
  hideBody();
  
  modalPlayer.style.display = 'block';  
  modalPlayer.append(videoPlayerRender(episode));
};
