import { SKIP_BACKWARD, SKIP_FORWARD } from '../../../../types/constants';
import { blurAllBtn } from './blurAllBtn';
import { playPauseVideo, skip, toggleFullscreen, toggleMute } from './videoplayerControls';

const videoPlayerElement = <HTMLElement>document.querySelector('.video-player');
const video = <HTMLVideoElement>document.querySelector('.video');

const pressHotKey = (e: KeyboardEvent) => {
  blurAllBtn();
  switch (e.key.toLocaleLowerCase()) {
    case ' ':
    case 'k':
    case 'л':
      playPauseVideo(video);
      break;
    case 'f':
    case 'а':
      toggleFullscreen(videoPlayerElement!);
      break;
    case 'm':
    case 'ь':
      toggleMute(video);
      break;
    case 'arrowleft':
    case 'j':
    case 'о':
      skip(video, SKIP_BACKWARD);
      break;
    case 'arrowright':
    case 'l':
    case 'д':
      skip(video, SKIP_FORWARD);
      break;
    case 'arrowdown':
      if (video.volume >= 0.1) video.volume -= 0.1;
      else video.volume = 0;
      break;
    case 'arrowup':
      if (video.volume <= 0.9) video.volume += 0.1;
      else video.volume = 1;
      break;
    default:
      break;
  }
};

export default pressHotKey;