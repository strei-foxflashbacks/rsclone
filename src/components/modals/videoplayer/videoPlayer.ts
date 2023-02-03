import createElement from '../../../helpers/createElement';
import {
  MIN_IN_HOUR,
  SEC_IN_HOUR,
  SEC_IN_MINUTE,
} from '../../../types/constants';
import './style.scss';

let videoContainer: HTMLVideoElement;

const playPauseVideo = (video: HTMLVideoElement): void => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updateTimeLine = () => {
  const timeLine = <HTMLElement>document.querySelector('.timeline');
  const indicator = <HTMLElement>document.querySelector('.timeline-indicator');

  const positionPercent = `${
    (videoContainer.currentTime / videoContainer.duration) * 100
  }%`;
  timeLine!.style.setProperty(
    '--timeline-position',
    // eslint-disable-next-line @typescript-eslint/comma-dangle
    positionPercent
  );
  indicator.style.setProperty('--indicator-position', positionPercent);
};

const timeLineRender = () => {
  const timeLineTime = createElement('timeline-time', {
    class: 'timeline-time',
  });
  const timeLine = createElement('div', { class: 'timeline' });
  const timeLineIndicator = createElement('div', {
    class: 'timeline-indicator',
  });
  timeLine.append(timeLineIndicator);

  const time = createElement('div', { class: 'time' });

  timeLineTime.append(timeLine);
  timeLineTime.append(time);
  return timeLineTime;
};

const btnControlsRender = (video: HTMLVideoElement) => {
  const btnControls = createElement('div', { class: 'controls-buttons' });

  const btnControlsLeft = createElement('div', {
    class: 'controls-buttons-left',
  });
  const playPause = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn play-pause' })
  );
  playPause.addEventListener('click', () => playPauseVideo(video));

  btnControlsLeft.append(playPause);
  const skipBackward = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn skip-backward' })
  );
  btnControlsLeft.append(skipBackward);
  const skipForward = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn skip-forward' })
  );
  btnControlsLeft.append(skipForward);
  const volume = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn volume' })
  );
  btnControlsLeft.append(volume);
  btnControls.append(btnControlsLeft);

  const btnControlsRight = createElement('div', {
    class: 'controls-buttons-right',
  });
  const subtitleSoundtrack = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn subtitle-soundtrack' })
  );
  btnControlsRight.append(subtitleSoundtrack);
  const settings = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn settings' })
  );
  btnControlsRight.append(settings);
  const streaming = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn streaming' })
  );
  btnControlsRight.append(streaming);
  const fullscreen = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn fullscreen' })
  );
  btnControlsRight.append(fullscreen);
  btnControls.append(btnControlsRight);

  return btnControls;
};

const convertNumToString = (num: number): string =>
  num.toString().padStart(2, '0');

const formatTime = (time: number) => {
  toString().padStart(2, '0');
  const sec = Math.floor(time % SEC_IN_MINUTE);
  const min = Math.floor(time / SEC_IN_MINUTE) % MIN_IN_HOUR;
  const hour = Math.floor(time / SEC_IN_HOUR);
  return `-${convertNumToString(hour)}:${convertNumToString(
    // eslint-disable-next-line @typescript-eslint/comma-dangle
    min
  )}:${convertNumToString(sec)}`;
};

const updateTime = (video: HTMLVideoElement) => {
  const time = document.querySelector('.time');
  const duration = video.duration;
  const currentTime = video.currentTime;
  time!.textContent = formatTime(duration - currentTime);
};

const videoPlayerRender = (src: string) => {
  const videoPlayer = createElement('div', { class: 'video-player' });
  const video = <HTMLVideoElement>(
    createElement('video', { class: 'video', src: src })
  );
  videoContainer = video;
  video.addEventListener('loadeddata', () => {
    const time = document.querySelector('.time');
    const duration = video.duration;
    time!.textContent = formatTime(duration);
  });

  video.addEventListener('timeupdate', () => {
    updateTime(video);
    updateTimeLine();
  });

  videoPlayer.append(video);

  video.addEventListener('click', () => {
    playPauseVideo(video);
  });

  video.addEventListener('play', () => {
    const btnPlayPause = document.querySelector('.play-pause');
    btnPlayPause!.classList.add('pause');
  });
  video.addEventListener('pause', () => {
    const btnPlayPause = document.querySelector('.play-pause');
    btnPlayPause!.classList.remove('pause');
  });

  const close = createElement('div', { class: 'close' });
  videoPlayer.append(close);

  const controls = createElement('div', { class: 'controls' });
  controls.append(timeLineRender());
  controls.append(btnControlsRender(video));

  videoPlayer.append(controls);

  return videoPlayer;
};

export default videoPlayerRender;
