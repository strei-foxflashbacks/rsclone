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
import {
  TSpeedVideo,
  TVideoControlsSettingsItems,
  TVideoControlsSubtitleSoundItems,
} from '../../../types/types';

let videoElement: HTMLVideoElement;
let videoPlayerElement: HTMLElement;

const playPauseVideo = (): void => {
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
};

const updateTimeLine = () => {
  const timeLine = <HTMLElement>document.querySelector('.timeline');

  const positionPercent = `${
    (videoElement.currentTime / videoElement.duration) * 100
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
    videoElement.currentTime = videoElement.duration * percent;
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

const skip = (skipTime: number) => {
  videoElement.currentTime += skipTime;
};

const iconCenterAnimate = (className: string) => {
  const videoPlayerIconCenter = <HTMLElement>(
    videoPlayerElement.querySelector('.video-player-icon-center')
  );
  videoPlayerIconCenter!.classList.add(className);
  videoPlayerIconCenter!.style.display = 'block';
  setTimeout(() => {
    videoPlayerIconCenter!.style.display = 'none';
    videoPlayerIconCenter!.classList.remove(className);
  }, 1000);
};

const settingsItemsName: TVideoControlsSettingsItems[] = [
  'size',
  'quality',
  'speed',
];
enum ControlsPopupSettingsText {
  size = 'Subtitle size',
  quality = 'Quality video',
  speed = 'Play speed',
}
const speedVideo: { [key in TSpeedVideo]: number } = {
  '0.25x': 0.25,
  '0.5x': 0.5,
  '0.75x': 0.75,
  normal: 1,
  '1.25x': 1.25,
  '1.5x': 1.5,
  '1.75x': 1.75,
  '2x': 2,
};
const defaultSubtitleSize = 'standard';
const defaultQuality = 'auto';
const defaultSpeedVideo = 'normal';

const changeActiveSubSettings = (el: HTMLElement) => {
  const parentEl = el.parentElement;
  [...parentEl!.children].forEach((element) => {
    element.classList.remove('active-subsettings');
  });
};

const switchVideoSpeed = (speed: string) => {
  if (videoElement.playbackRate !== +speed) {
    videoElement.playbackRate = speedVideo[<TSpeedVideo>speed];
  }
};

enum SubtitleFontSize {
  small = '80%',
  standard = '100%',
  large = '120%',
}

const changeSettings = (e: Event) => {
  const target = <HTMLElement>e.target;
  if (target.className.includes('speed')) {
    changeActiveSubSettings(target);
    target.classList.add('active-subsettings');
    switchVideoSpeed(target.id);
  }
  if (target.className.includes('size')) {
    changeActiveSubSettings(target);
    target.classList.add('active-subsettings');
    console.log(target.id);
    const size = <'small' | 'standard' | 'large'>target.id;
    videoElement.style.setProperty(
      '--subtitle-font-size',
      // eslint-disable-next-line @typescript-eslint/comma-dangle
      SubtitleFontSize[size]
    );
  }
};

let timeout: string | number | NodeJS.Timeout | undefined;
const hiddenInterface = () => {
  const close = videoPlayerElement.querySelector('.close');
  const controls = videoPlayerElement.querySelector('.controls');
  if (timeout) {
    clearTimeout(timeout);
    videoPlayerElement.classList.remove('hide-interface');
    close!.classList.remove('hide-interface');
    controls!.classList.remove('hide-interface');
  }
  timeout = setTimeout(() => {
    videoPlayerElement.classList.add('hide-interface');
    close!.classList.add('hide-interface');
    controls!.classList.add('hide-interface');
  }, 5000);
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
    createElement('button', { class: 'controls-btn skip-btn skip-backward' })
  );

  skipBackward.addEventListener('click', () => {
    iconCenterAnimate('skip-backward');
    skip(SKIP_BACKWARD);
  });
  btnControlsLeft.append(skipBackward);
  const skipForward = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn skip-btn skip-forward' })
  );
  skipForward.addEventListener('click', () => {
    iconCenterAnimate('skip-forward');
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
  videoElement.volume = +volumeRange.value;
  volumeRange.addEventListener('input', () => {
    videoElement.muted = false;
    videoElement.volume = +volumeRange.value;
  });
  let lastVolume: number;
  volumeBtn.addEventListener('click', () => {
    if (videoElement.muted) {
      videoElement.muted = false;
      videoElement.volume = lastVolume;
    } else {
      lastVolume = videoElement.volume;
      videoElement.muted = true;
      videoElement.volume = 0;
    }
  });
  videoElement.addEventListener('volumechange', () => {
    volumeRange.value = `${videoElement.volume}`;
    if (!videoElement.volume || videoElement.muted) {
      volumeBtn.classList.add('muted');
      volumeBtn.classList.remove('half-volume');
    } else if (videoElement.volume <= 0.5) {
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
  const subtitleSoundContainer = createElement('div', {
    class: 'subtitle-sound-container',
  });
  const subtitleSound = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn subtitle-sound' })
  );
  subtitleSoundContainer.append(subtitleSound);
  const subtitleSoundPopup = createElement('div', {
    class: 'controls-popup subtitle-sound-popup',
  });
  const subtitleSoundItemsName: TVideoControlsSubtitleSoundItems[] = [
    'sound',
    'language',
    'subtitle',
  ];
  enum ControlsPopupSubtitleSoundText {
    sound = 'Sound',
    language = 'Language',
    subtitle = 'Subtitle',
  }
  const defaultSound = 'stereo';
  const defaultLanguage = 'english';
  const defaultSubtitle = 'off';
  const subSettingSubtitleSound = {
    sound: ['stereo', '5.1'],
    language: ['english', 'russian'],
    subtitle: ['off', 'on'],
  };
  subtitleSoundItemsName.forEach((item) => {
    const subtitleSoundItem = createElement('div', {
      class: 'controls-popup-item',
    });
    const titleItem = createElement(
      'p',
      { class: 'controls-popup-item-title' },
      // eslint-disable-next-line @typescript-eslint/comma-dangle
      `${ControlsPopupSubtitleSoundText[item]}`
    );
    const subSettingsItems = createElement('ul', {
      class: 'subsettings-items',
    });
    subSettingSubtitleSound[item].forEach((itemSubSettings) => {
      const activeSubSettingsItem = [
        defaultSound,
        defaultLanguage,
        defaultSubtitle,
      ].includes(itemSubSettings);
      const activeSubSettingsClass = activeSubSettingsItem
        ? 'active-subsettings'
        : '';
      const subSettingsItem = createElement(
        'li',
        {
          class: `subsettings-item subsettings-item-${item} ${activeSubSettingsClass}`,
          id: `${itemSubSettings}`,
        },
        // eslint-disable-next-line @typescript-eslint/comma-dangle
        `${itemSubSettings}`
      );
      subSettingsItems.append(subSettingsItem);
    });

    subtitleSoundItem.append(titleItem);
    subtitleSoundItem.append(subSettingsItems);
    subSettingsItems.addEventListener('click', changeSettings);
    subtitleSoundPopup.append(subtitleSoundItem);
  });

  subtitleSoundContainer.append(subtitleSoundPopup);
  btnControlsRight.append(subtitleSoundContainer);

  const settingsContainer = createElement('div', {
    class: 'settings-container',
  });
  const settingsBtn = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn settings' })
  );
  settingsContainer.append(settingsBtn);
  const settingsPopup = createElement('div', {
    class: 'controls-popup settings-popup',
  });

  const subSettingSettings: {
    [key in TVideoControlsSettingsItems]: string[];
  } = {
    size: ['small', 'standard', 'large'],
    quality: ['auto', '1440p', '1080p', '720p', '480p'],
    speed: ['0.25x', '0.5x', '0.75x', 'normal', '1.25x', '1.5x', '1.75x', '2x'],
  };

  settingsItemsName.forEach((item) => {
    const settingsItem = createElement('div', {
      class: 'controls-popup-item',
    });
    const titleContainer = createElement('div', {
      class: 'controls-popup-title-container',
    });
    const iconItem = createElement('div', {
      class: `controls-popup-icon controls-popup-icon-${item}`,
    });
    const titleItem = createElement(
      'p',
      { class: 'controls-popup-item-title' },
      // eslint-disable-next-line @typescript-eslint/comma-dangle
      `${ControlsPopupSettingsText[item]}`
    );
    titleContainer.append(iconItem);
    titleContainer.append(titleItem);
    settingsItem.append(titleContainer);

    const subSettingsItems = createElement('ul', {
      class: 'subsettings-items',
    });
    subSettingSettings[item].forEach((itemSubSettings) => {
      const activeSubSettingsItem = [
        defaultSubtitleSize,
        defaultQuality,
        defaultSpeedVideo,
      ].includes(itemSubSettings);
      const activeSubSettingsClass = activeSubSettingsItem
        ? 'active-subsettings'
        : '';
      const subSettingsItem = createElement(
        'li',
        {
          class: `subsettings-item subsettings-item-${item} ${activeSubSettingsClass}`,
          id: `${itemSubSettings}`,
        },
        // eslint-disable-next-line @typescript-eslint/comma-dangle
        `${itemSubSettings}`
      );
      subSettingsItems.append(subSettingsItem);
    });

    subSettingsItems.addEventListener('click', changeSettings);
    settingsItem.append(subSettingsItems);
    settingsPopup.append(settingsItem);
  });

  settingsContainer.append(settingsPopup);
  btnControlsRight.append(settingsContainer);
  const streaming = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn streaming' })
  );
  btnControlsRight.append(streaming);
  const fullscreen = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn fullscreen' })
  );
  fullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      videoPlayerElement.requestFullscreen();
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

import './../../assets/videos/video-en.vtt';
import './../../assets/videos/video-ru.vtt';

const subtitleSrcArray = [
  {
    src: './assets/video-en.vtt',
    srclang: 'en',
    label: 'English',
  },
  {
    src: './assets/video-ru.vtt',
    srclang: 'ru',
    label: 'Russian',
  },
];

// const defaultSubtitleLang = 'en';

const currentSubtitleLang = 'en';
const switchSubtitleLang = () => {
  const subs = videoElement.textTracks;
  if (!subs.length) return;
  for (const sub of subs) {
    // const sub = subs[i];
    console.log('sub', sub);

    sub.mode = 'hidden';
    console.log('sub', sub);

    if (sub.language === currentSubtitleLang) sub.mode = 'showing';
    console.log(sub.mode);
    console.log('subs', subs);
  }
  const s1 = videoElement.textTracks[0];
  console.log('change', videoElement.textTracks[0] === s1);
  console.log('change', videoElement.textTracks);
};

const addSubtitles = () => {
  if (!subtitleSrcArray.length) return;
  subtitleSrcArray.forEach((sub) => {
    const subtitleContainer = <HTMLTrackElement>createElement('track', {
      class: 'track-subtitle',
    });
    subtitleContainer.default = sub.srclang === 'en';
    subtitleContainer.src = sub.src;
    subtitleContainer.srclang = sub.srclang;
    subtitleContainer.label = sub.label;
    subtitleContainer.track.mode = 'hidden';
    videoElement.append(subtitleContainer);
  });

  switchSubtitleLang();
};

const videoPlayerRender = (src: string) => {
  const videoPlayer = createElement('div', { class: 'video-player' });
  const videoPlayerIconCenter = createElement('div', {
    class: 'video-player-icon-center',
  });
  videoPlayer.append(videoPlayerIconCenter);
  videoPlayerElement = videoPlayer;
  videoPlayerElement.addEventListener('mousemove', hiddenInterface);

  const video = <HTMLVideoElement>(
    createElement('video', { class: 'video', src: src })
  );
  videoElement = video;
  addSubtitles();
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
    iconCenterAnimate('play');
  });
  video.addEventListener('pause', () => {
    const btnPlayPause = document.querySelector('.play-pause');
    btnPlayPause!.classList.remove('pause');
    iconCenterAnimate('pause');
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
