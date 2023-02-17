import formatTime from './formatTime';
import { hideControlsPanel } from './hideControlsPanel';
import pressHotKey from './hotKeysEvents';
import { iconCenterAnimate } from './iconCenterAnimate';
import { updateTimeLine } from './updateTimeLine';
import { playPauseVideo, toggleFullscreen, updateTime } from './videoplayerControls';

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

  video.addEventListener('timeupdate', () => {
    updateTime(video);
    updateTimeLine(video);
  });

  video.addEventListener('click', () => {
    playPauseVideo(video);
  });

  video.addEventListener('play', () => {
    const btnPlayPause = document.querySelector('.play-pause');
    btnPlayPause!.classList.add('pause');
    iconCenterAnimate('play');
    hideControlsPanel(video, videoPlayerElement);
  });
  video.addEventListener('pause', () => {
    const btnPlayPause = document.querySelector('.play-pause');
    btnPlayPause!.classList.remove('pause');
    iconCenterAnimate('pause');
  });

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    pressHotKey(e, video);
  });
};

export default videoPlayerEvents;