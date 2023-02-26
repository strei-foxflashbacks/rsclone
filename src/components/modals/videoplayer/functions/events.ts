import formatTime from './formatTime';
import { hideControlsPanel } from './hideControlsPanel';
import pressHotKey from './hotKeysEvents';
import { iconCenterAnimate } from './iconCenterAnimate';
import { updateTimeLine } from './updateTimeLine';
import { playPauseVideo, toggleFullscreen, updateTime } from './videoplayerControls';

const timeUpdateEvent = () => {
  updateTime();
  updateTimeLine();
};

const pauseEvents = () => {
  const btnPlayPause = document.querySelector('.play-pause');
  btnPlayPause!.classList.remove('pause');
  iconCenterAnimate('pause');
};

const videoPlayerEvents = (videoPlayerElement: HTMLElement, video: HTMLVideoElement) => {
  videoPlayerElement.addEventListener('mousemove', () => {
    hideControlsPanel(video, videoPlayerElement);
  });
  videoPlayerElement.addEventListener('dblclick', () => {
    toggleFullscreen(videoPlayerElement);
  });
  video.addEventListener('loadeddata', () => {
    const time = document.querySelector('.time');
    const duration = video.duration;
    time!.textContent = formatTime(duration);
  });

  video.addEventListener('timeupdate', timeUpdateEvent);

  video.addEventListener('click', () => {
    playPauseVideo(video);
  });

  video.addEventListener('play', () => {
    const btnPlayPause = document.querySelector('.play-pause');
    btnPlayPause!.classList.add('pause');
    iconCenterAnimate('play');
    hideControlsPanel(video, videoPlayerElement);
  });
  video.addEventListener('pause', pauseEvents);

  document.addEventListener('keydown', pressHotKey);
};

export default videoPlayerEvents;

export const removeEvents = () => {
  const video = <HTMLVideoElement>document.querySelector('.video');
  video.removeEventListener('pause', pauseEvents);
  video.removeEventListener('timeupdate', timeUpdateEvent);
};