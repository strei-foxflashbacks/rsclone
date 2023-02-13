import videoPlayerRender from '../components/modals/videoplayer/videoPlayer';
import { ser } from './../templates/main/userPage/tempData';
import createElement from './createElement';

export const openVideoPlayer = () => {
  const body = document.body;
  let modalPlayer = <HTMLElement>document.querySelector('.modal-player');
  if (!modalPlayer)
    modalPlayer = createElement('div', { class: 'modal-player' });
  body.style.overflowY = 'hidden';
  document.body.append(modalPlayer);
  // modalPlayer.innerHTML = '';
  modalPlayer.style.display = 'block';
  modalPlayer.append(videoPlayerRender(ser));
};
