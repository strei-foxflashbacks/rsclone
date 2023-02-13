import { TSpeedVideo } from '../../../../types/types';
import { speedVideo } from './constants';

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

export const toggleMute = (video: HTMLVideoElement, lastVolume: number) => {
  if (video.muted) {
    video.muted = false;
    video.volume = lastVolume;
  } else {
    lastVolume = video.volume;
    video.muted = true;
    video.volume = 0;
  }
};
