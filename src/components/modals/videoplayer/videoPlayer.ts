import createElement from '../../../helpers/createElement';
import {
  MIN_IN_HOUR,
  SEC_IN_HOUR,
  SEC_IN_MINUTE,
  SKIP_BACKWARD,
  SKIP_FORWARD,
} from '../../../types/constants';
import './style.scss';
import './../../assets/previews/preview0.png';
import './../../assets/previews/preview1.png';
import './../../assets/previews/preview2.png';
import './../../assets/previews/preview3.png';
import './../../assets/previews/preview4.png';
import './../../assets/previews/preview5.png';
import './../../assets/previews/preview6.png';
import './../../assets/previews/preview7.png';
import './../../assets/previews/preview8.png';
import './../../assets/previews/preview9.png';
import './../../assets/previews/preview10.png';
import './../../assets/previews/preview11.png';
import './../../assets/previews/preview12.png';
import './../../assets/previews/preview13.png';
import './../../assets/previews/preview14.png';

let videoContainer: HTMLVideoElement;

const playPauseVideo = (): void => {
  if (videoContainer.paused) {
    videoContainer.play();
  } else {
    videoContainer.pause();
  }
};

const updateTimeLine = () => {
  const timeLine = <HTMLElement>document.querySelector('.timeline');

  const positionPercent = `${
    (videoContainer.currentTime / videoContainer.duration) * 100
  }%`;
  timeLine!.style.setProperty('--timeline-position', positionPercent);
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

  const previewImage = <HTMLImageElement>createElement('img', {
    class: 'timeline-preview-img',
    alt: 'preview image',
  });
  timeLine.append(previewImage);

  timeLine.addEventListener('click', (e: MouseEvent) => {
    const xClickMouse = e.x - timeLine.getBoundingClientRect().x;
    const widthTimeLine = parseInt(window.getComputedStyle(timeLine).width);
    const percent = xClickMouse / widthTimeLine;
    videoContainer.currentTime = videoContainer.duration * percent;
  });

  timeLine.addEventListener('mousemove', (e: MouseEvent) => {
    const xClickMouse = e.x - timeLine.getBoundingClientRect().x;
    const widthTimeLine = parseInt(window.getComputedStyle(timeLine).width);
    const percent = (xClickMouse / widthTimeLine) * 100;
    timeLine.style.setProperty('--timeline-preview', `${percent}%`);
    const imgNumber = Math.trunc(percent / (100 / 15));

    previewImage.src = `./assets/preview${imgNumber}.png`;
    previewImage.style.display = 'block';
  });

  document.addEventListener('mousemove', (e: Event) => {
    const target = <HTMLElement>e.target;
    if (!target.classList.contains('timeline')) {
      timeLine.style.setProperty('--timeline-preview', '0%');
      previewImage.style.display = 'none';
    }
  });

  const time = createElement('div', { class: 'time' });

  timeLineTime.append(timeLine);
  timeLineTime.append(time);
  return timeLineTime;
};

const skip = (skipDuration: number) => {
  videoContainer.currentTime += skipDuration;
};

const btnControlsRender = () => {
  const btnControls = createElement('div', { class: 'controls-buttons' });

  const btnControlsLeft = createElement('div', {
    class: 'controls-buttons-left',
  });
  const playPause = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn play-pause' })
  );
  playPause.addEventListener('click', () => playPauseVideo());

  btnControlsLeft.append(playPause);
  const skipBackward = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn skip-backward' })
  );
  skipBackward.addEventListener('click', () => {
    skip(SKIP_BACKWARD);
  });
  btnControlsLeft.append(skipBackward);
  const skipForward = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn skip-forward' })
  );
  skipForward.addEventListener('click', () => {
    skip(SKIP_FORWARD);
  });
  btnControlsLeft.append(skipForward);

  const volumeContainer = createElement('div', { class: 'volume-container' });
  const volumeBtn = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn volume' })
  );
  volumeContainer.append(volumeBtn);
  const volumeRange = <HTMLInputElement>createElement('input', {
    class: 'volume-range',
    type: 'range',
    min: '0',
    max: '1',
    step: '0.01',
    value: '0.5',
  });
  videoContainer.volume = +volumeRange.value;
  volumeRange.addEventListener('input', () => {
    videoContainer.muted = false;
    videoContainer.volume = +volumeRange.value;
  });
  let lastVolume: number;
  volumeBtn.addEventListener('click', () => {
    if (videoContainer.muted) {
      videoContainer.muted = false;
      videoContainer.volume = lastVolume;
    } else {
      lastVolume = videoContainer.volume;
      videoContainer.muted = true;
      videoContainer.volume = 0;
    }
  });
  videoContainer.addEventListener('volumechange', () => {
    volumeRange.value = `${videoContainer.volume}`;
    if (!videoContainer.volume || videoContainer.muted) {
      volumeBtn.classList.add('muted');
      volumeBtn.classList.remove('half-volume');
    } else if (videoContainer.volume <= 0.5) {
      volumeBtn.classList.remove('muted');
      volumeBtn.classList.add('half-volume');
    } else {
      volumeBtn.classList.remove('muted');
      volumeBtn.classList.remove('half-volume');
    }
  });
  volumeContainer.append(volumeRange);

  btnControlsLeft.append(volumeContainer);
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
  fullscreen.addEventListener('click', () => {
    const videoPlayer = document.querySelector('.video-player');
    if (!document.fullscreenElement) {
      videoPlayer!.requestFullscreen();
      fullscreen.classList.add('fullscreen-exit');
    } else {
      document.exitFullscreen();
      fullscreen.classList.remove('fullscreen-exit');
    }
  });
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
    playPauseVideo();
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
  controls.append(btnControlsRender());

  videoPlayer.append(controls);

  return videoPlayer;
};

export default videoPlayerRender;
