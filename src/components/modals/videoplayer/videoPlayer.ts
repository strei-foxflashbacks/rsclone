import createElement from '../../../helpers/createElement';
import './style.scss';

const playPauseVideo = (video: HTMLVideoElement): void => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const progressBarRender = () => {
  const progressBarTime = createElement('progress-bar-time', {
    class: 'progress-bar-time',
  });
  const progressBar = <HTMLInputElement>(
    createElement('input', { class: 'progress-bar', type: 'range', value: '0' })
  );

  const time = createElement('div', { class: 'time' });
  const hour = createElement('span', { class: 'time-hour' }, '-00:');
  const min = createElement('span', { class: 'time-min' }, '00:');
  const sec = createElement('span', { class: 'time-sec' }, '00');

  time.append(hour);
  time.append(min);
  time.append(sec);

  progressBarTime.append(progressBar);
  progressBarTime.append(time);
  return progressBarTime;
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

const videoPlayerRender = (src: string, duration = 0) => {
  const videoPlayer = createElement('div', { class: 'video-player' });
  const video = <HTMLVideoElement>(
    createElement('video', { class: 'video', src: src })
  );

  videoPlayer.append(video);
  console.log(duration);

  video.addEventListener('click', () => {
    playPauseVideo(video);
  });

  // video.addEventListener('ended', () => {
  //   playPauseVideo(video);
  // });
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
  controls.append(progressBarRender());
  controls.append(btnControlsRender(video));

  videoPlayer.append(controls);

  return videoPlayer;
};

export default videoPlayerRender;
