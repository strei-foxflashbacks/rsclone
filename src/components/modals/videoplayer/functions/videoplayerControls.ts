import { TSpeedVideo } from '../../../../types/types';
import { speedVideo } from './constants';
import { removeEvents } from './events';
import formatTime from './formatTime';
import pressHotKey from './hotKeysEvents';

export const playPauseVideo = (video: HTMLVideoElement): void => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

export const skip = (video: HTMLVideoElement, skipTime: number) => {
  video.currentTime += skipTime;
};

export const switchVideoSpeed = (video: HTMLVideoElement, speed: string) => {
  if (video.playbackRate !== +speed) {
    video.playbackRate = speedVideo[<TSpeedVideo>speed];
  }
};

let lastVolume: number;
export const toggleMute = (video: HTMLVideoElement) => {
  if (video.muted) {
    video.muted = false;
    video.volume = lastVolume;
  } else {
    lastVolume = video.volume;
    video.muted = true;
    video.volume = 0;
  }
};

export const toggleFullscreen = (videoPlayer: HTMLElement) => {
  const fullscreen = document.querySelector('.fullscreen');
  if (!document.fullscreenElement) {
    videoPlayer.requestFullscreen();
    fullscreen!.classList.add('fullscreen-exit');
  } else {
    document.exitFullscreen();
    fullscreen!.classList.remove('fullscreen-exit');
  }
};

export const updateTime = () => {
  const video = <HTMLVideoElement>document.querySelector('.video');
  const time = document.querySelector('.time');
  const duration = video.duration;
  const currentTime = video.currentTime;
  time!.textContent = formatTime(duration - currentTime);
};

export const closeVideoplayer = (video: HTMLVideoElement) => {
  video.pause();
  removeEvents();
  
  document.removeEventListener('keydown', pressHotKey);
  const modalPlayer = <HTMLElement>document.querySelector('.modal-player');
  modalPlayer.remove();
  modalPlayer!.style.display = 'none';
  document.body.style.overflow = 'visible';
};