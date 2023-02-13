/* eslint-disable @typescript-eslint/comma-dangle */
import createElement from '../../../helpers/createElement';
import {
  MIN_IN_HOUR,
  SEC_IN_HOUR,
  SEC_IN_MINUTE,
  SKIP_BACKWARD,
  SKIP_FORWARD,
} from '../../../types/constants';
import { TSubtitleSize, Film, SubtitlesData } from '../../../types/types';
import {
  playPauseVideo,
  skip,
  switchVideoSpeed,
} from './functions/videoplayerControls';
import { clickTimeline, mouseMoveTimeLine } from './functions/timeLineEvents';
import { updateTimeLine } from './functions/updateTimeLine';

import './style.scss';
import {
  ControlsPopupSettingsText,
  ControlsPopupSubtitleSoundText,
  settingsItemsName,
  subSettingSettings,
  subSettingSubtitleSound,
  SubtitleFontSize,
  subtitleSoundItemsName,
} from './functions/constants';
import { iconCenterAnimate } from './functions/iconCenterAnimate';
import { blurAllBtn } from './functions/blurAllBtn';

const defaultSubtitleSize = 'standard';
const defaultQuality = 'auto';
const defaultSpeedVideo = 'normal';

const defaultSound = 'stereo';
const defaultLanguage = 'en';
const defaultSubtitle = 'off';

let videoElement: HTMLVideoElement;
let videoPlayerElement: HTMLElement;
let lastVolume: number;

const timeLineRender = (previews: string[]) => {
  const timeLineTime = createElement('timeline-time', {
    class: 'timeline-time',
  });
  const timeLine = createElement('div', { class: 'timeline' });
  const timeLineIndicator = createElement('div', {
    class: 'timeline-indicator',
  });

  const previewImage = <HTMLImageElement>createElement('img', {
    class: 'timeline-preview-img',
    alt: 'preview image',
  });
  timeLine.append(timeLineIndicator, previewImage);

  timeLine.addEventListener('click', clickTimeline);

  document.addEventListener('mousemove', (e: MouseEvent) => {
    mouseMoveTimeLine(e, previews);
  });

  const time = createElement('div', { class: 'time' });
  timeLineTime.append(timeLine, time);
  return timeLineTime;
};

const changeActiveSubSettings = (el: HTMLElement) => {
  const parentEl = el.parentElement;
  [...parentEl!.children].forEach((element) => {
    element.classList.remove('active-subsettings');
  });
};

const offSubtitle = () => {
  for (const sub of videoElement.textTracks) {
    sub.mode = 'hidden';
  }
};

// eslint-disable-next-line prefer-const
let currentSubtitleLang = 'en';

const onSubtitle = () => {
  for (const sub of videoElement.textTracks) {
    if (sub.language === currentSubtitleLang) sub.mode = 'showing';
    else sub.mode = 'hidden';
  }
};

// eslint-disable-next-line @typescript-eslint/naming-convention
enum subtitleLang {
  en = 'english',
  ru = 'russian',
}

const changeSettings = (e: Event) => {
  const target = <HTMLElement>e.target;
  if (target.className.includes('speed')) {
    switchVideoSpeed(videoElement, target.id);
  }
  if (target.className.includes('size')) {
    const size = <TSubtitleSize>target.id;
    videoElement.style.setProperty(
      '--subtitle-font-size',
      SubtitleFontSize[size]
    );
  }
  if (target.className.includes('subtitle')) {
    if (target.id === 'off') {
      offSubtitle();
    } else {
      onSubtitle();
    }
  }
  if (target.className.includes('language')) {
    const lang = <'en' | 'ru'>target.id;
    currentSubtitleLang = lang;
    onSubtitle();
  }
  changeActiveSubSettings(target);
  target.classList.add('active-subsettings');
};

let timeoutHidden: string | number | NodeJS.Timeout | undefined;
const hiddenInterface = () => {
  const close = videoPlayerElement.querySelector('.close');
  const filmName = videoPlayerElement.querySelector('.film-name');
  const controls = videoPlayerElement.querySelector('.controls');
  if (timeoutHidden) {
    clearTimeout(timeoutHidden);
    videoPlayerElement.classList.remove('hide-interface');
    close!.classList.remove('hide-interface');
    filmName!.classList.remove('hide-interface');
    controls!.classList.remove('hide-interface');
  }
  timeoutHidden = setTimeout(() => {
    if (!videoElement.paused) {
      videoPlayerElement.classList.add('hide-interface');
      close!.classList.add('hide-interface');
      filmName!.classList.add('hide-interface');
      controls!.classList.add('hide-interface');
    }
  }, 5000);
};

const toggleMute = () => {
  if (videoElement.muted) {
    videoElement.muted = false;
    videoElement.volume = lastVolume;
  } else {
    lastVolume = videoElement.volume;
    videoElement.muted = true;
    videoElement.volume = 0;
  }
};

const toggleFullscreen = () => {
  const fullscreen = videoPlayerElement.querySelector('.fullscreen');
  if (!document.fullscreenElement) {
    videoPlayerElement.requestFullscreen();
    fullscreen!.classList.add('fullscreen-exit');
  } else {
    document.exitFullscreen();
    fullscreen!.classList.remove('fullscreen-exit');
  }
};

const btnControlsRender = () => {
  const btnControls = createElement('div', { class: 'controls-buttons' });

  const btnControlsLeft = createElement('div', {
    class: 'controls-buttons-left',
  });
  const playPause = <HTMLButtonElement>createElement('button', {
    class: 'controls-btn play-pause',
  });
  playPause.addEventListener('click', () => {
    playPauseVideo(videoElement);
  });

  const skipBackward = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn skip-btn skip-backward' })
  );

  skipBackward.addEventListener('click', () => {
    iconCenterAnimate('skip-backward');
    skip(videoElement, SKIP_BACKWARD);
  });
  const skipForward = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn skip-btn skip-forward' })
  );
  skipForward.addEventListener('click', () => {
    iconCenterAnimate('skip-forward');
    skip(videoElement, SKIP_FORWARD);
  });

  const volumeContainer = createElement('div', { class: 'volume-container' });
  const volumeBtn = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn volume' })
  );
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
  volumeBtn.addEventListener('click', () => {});
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
  volumeContainer.append(volumeBtn, volumeRange);
  btnControlsLeft.append(playPause, skipBackward, skipForward, volumeContainer);
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
  const subtitleSoundPopup = createElement('div', {
    class: 'controls-popup subtitle-sound-popup',
  });

  subtitleSoundItemsName.forEach((item) => {
    const subtitleSoundItem = createElement('div', {
      class: 'controls-popup-item',
    });
    const titleItem = createElement(
      'p',
      { class: 'controls-popup-item-title' },
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
        `${
          item === 'language'
            ? subtitleLang[<'en' | 'ru'>itemSubSettings]
            : itemSubSettings
        }`
      );
      subSettingsItems.append(subSettingsItem);
    });

    subtitleSoundItem.append(titleItem);
    subtitleSoundItem.append(subSettingsItems);
    subSettingsItems.addEventListener('click', changeSettings);
    subtitleSoundPopup.append(subtitleSoundItem);
  });
  subtitleSoundContainer.append(subtitleSound, subtitleSoundPopup);

  const settingsContainer = createElement('div', {
    class: 'settings-container',
  });
  const settingsBtn = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn settings' })
  );
  const settingsPopup = createElement('div', {
    class: 'controls-popup settings-popup',
  });

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
      `${ControlsPopupSettingsText[item]}`
    );
    titleContainer.append(iconItem, titleItem);

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
        `${itemSubSettings}`
      );
      subSettingsItems.append(subSettingsItem);
    });

    subSettingsItems.addEventListener('click', changeSettings);
    settingsItem.append(titleContainer, subSettingsItems);
    settingsPopup.append(settingsItem);
  });
  settingsContainer.append(settingsBtn, settingsPopup);

  const streaming = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn streaming' })
  );
  btnControlsRight.append(streaming);
  const fullscreen = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn fullscreen' })
  );
  fullscreen.addEventListener('click', toggleFullscreen);
  btnControlsRight.append(
    subtitleSoundContainer,
    settingsContainer,
    fullscreen
  );
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
    min
  )}:${convertNumToString(sec)}`;
};

const updateTime = (video: HTMLVideoElement) => {
  const time = document.querySelector('.time');
  const duration = video.duration;
  const currentTime = video.currentTime;
  time!.textContent = formatTime(duration - currentTime);
};

const addSubtitles = (subtitles: SubtitlesData[]) => {
  if (!subtitles.length) return;
  subtitles.forEach((sub) => {
    const subtitleContainer = <HTMLTrackElement>createElement('track', {
      class: 'track-subtitle',
    });
    subtitleContainer.src = sub.src;
    subtitleContainer.srclang = sub.srclang;
    subtitleContainer.label = sub.label;
    subtitleContainer.track.mode = 'hidden';
    videoElement.append(subtitleContainer);
  });
};

const pressHotKey = (e: KeyboardEvent) => {
  blurAllBtn();
  switch (e.key.toLocaleLowerCase()) {
    case ' ':
    case 'k':
    case 'л':
      playPauseVideo(videoElement);
      break;
    case 'f':
    case 'а':
      toggleFullscreen();
      break;
    case 'm':
    case 'ь':
      toggleMute();
      break;
    case 'arrowleft':
    case 'j':
    case 'о':
      skip(videoElement, SKIP_BACKWARD);
      break;
    case 'arrowright':
    case 'l':
    case 'д':
      skip(videoElement, SKIP_FORWARD);
      break;
    case 'arrowdown':
      if (videoElement.volume >= 0.1) videoElement.volume -= 0.1;
      else videoElement.volume = 0;
      break;
    case 'arrowup':
      if (videoElement.volume <= 0.9) videoElement.volume += 0.1;
      else videoElement.volume = 1;
      break;
    default:
      break;
  }
};

const closeVideoplayer = () => {
  videoElement.pause();
  document.removeEventListener('keydown', pressHotKey);
  const modalPlayer = <HTMLElement>document.querySelector('.modal-player');
  modalPlayer!.style.display = 'none';
};

const videoPlayerRender = (film: Film) => {
  document.addEventListener('keydown', pressHotKey);

  const videoPlayer = createElement('div', { class: 'video-player' });
  const videoPlayerIconCenter = createElement('div', {
    class: 'video-player-icon-center',
  });
  videoPlayer.append(videoPlayerIconCenter);
  videoPlayerElement = videoPlayer;
  videoPlayerElement.addEventListener('mousemove', hiddenInterface);
  videoPlayerElement.addEventListener('dblclick', toggleFullscreen);

  const video = <HTMLVideoElement>(
    createElement('video', { class: 'video', src: film.src })
  );
  videoElement = video;

  addSubtitles(film.subtitles);

  video.addEventListener('loadeddata', () => {
    const time = document.querySelector('.time');
    const duration = video.duration;
    time!.textContent = formatTime(duration);
  });

  video.addEventListener('timeupdate', () => {
    updateTime(video);
    updateTimeLine(video);
  });

  videoPlayer.append(video);

  video.addEventListener('click', () => {
    playPauseVideo(video);
  });

  video.addEventListener('play', () => {
    const btnPlayPause = document.querySelector('.play-pause');
    btnPlayPause!.classList.add('pause');
    iconCenterAnimate('play');
    hiddenInterface();
  });
  video.addEventListener('pause', () => {
    const btnPlayPause = document.querySelector('.play-pause');
    btnPlayPause!.classList.remove('pause');
    iconCenterAnimate('pause');
  });

  const close = createElement('div', { class: 'close' });
  close.addEventListener('click', closeVideoplayer);
  videoPlayer.append(close);

  const filmName = createElement('div', { class: 'film-name' });
  filmName.innerText = film.name;
  videoPlayer.append(filmName);

  const controls = createElement('div', { class: 'controls' });
  controls.append(timeLineRender(film.thumbnails));
  controls.append(btnControlsRender());

  videoPlayer.append(controls);
  video.play();
  hiddenInterface();

  return videoPlayer;
};

export default videoPlayerRender;
