import createElement from '../../../helpers/createElement';
import { SKIP_BACKWARD, SKIP_FORWARD } from '../../../types/constants';
import {
  closeVideoplayer,
  playPauseVideo,
  skip,
  toggleFullscreen,
  updateTime,
} from './functions/videoplayerControls';
import { updateTimeLine } from './functions/updateTimeLine';

import './_videoplayer.scss';
import {
  ControlsPopupSettingsText,
  ControlsPopupSubtitleSoundText,
  settingsItemsName,
  subSettingSettings,
  subSettingSubtitleSound,
  subtitleSoundItemsName,
} from './functions/constants';
import { iconCenterAnimate } from './functions/iconCenterAnimate';
import { hideControlsPanel } from './functions/hideControlsPanel';
import { Episode } from '../../../types/Episode';
import { SubtitlesData } from '../../../types/SubtitlesData';
import getTimelineElement from './functions/getTimelineElement';
import formatTime from './functions/formatTime';
import changeSettings from './functions/changeSettings';
import pressHotKey from './functions/hotKeysEvents';

const defaultSubtitleSize = 'standard';
const defaultQuality = 'auto';
const defaultSpeedVideo = 'normal';

const defaultSound = 'stereo';
const defaultLanguage = 'en';
const defaultSubtitle = 'off';

let videoElement: HTMLVideoElement;
let videoPlayerElement: HTMLElement;

enum SubtitleLang {
  en = 'english',
  ru = 'russian',
}

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
      `${ControlsPopupSubtitleSoundText[item]}`,
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
            ? SubtitleLang[<'en' | 'ru'>itemSubSettings]
            : itemSubSettings
        }`,
      );
      subSettingsItems.append(subSettingsItem);
    });

    subtitleSoundItem.append(titleItem);
    subtitleSoundItem.append(subSettingsItems);
    subSettingsItems.addEventListener('click', (e: Event) => {
      changeSettings(e, videoElement);
    });
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
      `${ControlsPopupSettingsText[item]}`,
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
        `${itemSubSettings}`,
      );
      subSettingsItems.append(subSettingsItem);
    });

    subSettingsItems.addEventListener('click', (e: Event) => {
      changeSettings(e, videoElement);
    });
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
  fullscreen.addEventListener('click', () => {
    toggleFullscreen(videoPlayerElement);
  });
  btnControlsRight.append(
    subtitleSoundContainer,
    settingsContainer,
    fullscreen,
  );
  btnControls.append(btnControlsRight);

  return btnControls;
};



const addSubtitles = (subtitles: SubtitlesData[]) => {
  if (!subtitles.length) return;
  subtitles.forEach((sub) => {
    const subtitleContainer = <HTMLTrackElement>createElement('track', {
      class: 'track-subtitle',
    });
    subtitleContainer.src = sub.src;
    subtitleContainer.srclang = sub.srcLang;
    subtitleContainer.label = sub.label;
    subtitleContainer.track.mode = 'hidden';
    videoElement.append(subtitleContainer);
  });
};




const videoPlayerRender = (episode: Episode) => {
  
  const videoPlayer = createElement('div', { class: 'video-player' });
  const videoPlayerIconCenter = createElement('div', {
    class: 'video-player-icon-center',
  });
  const video = <HTMLVideoElement>(
    createElement('video', 
      { 
        class: 'video',
        preload: 'metadata',
        src: episode.src, 
      })
  );
  
  videoElement = video;
  videoPlayer.append(videoPlayerIconCenter);
  videoPlayerElement = videoPlayer;
  videoPlayerElement.addEventListener('mousemove', () => {
    hideControlsPanel(video, videoPlayer);
  });
  videoPlayerElement.addEventListener('dblclick', () => {
    toggleFullscreen(videoPlayerElement);
  });

  addSubtitles(episode.subtitles);

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
    hideControlsPanel(video, videoPlayer);
  });
  video.addEventListener('pause', () => {
    const btnPlayPause = document.querySelector('.play-pause');
    btnPlayPause!.classList.remove('pause');
    iconCenterAnimate('pause');
  });

  const close = createElement('div', { class: 'close-video' });
  close.addEventListener('click', () => {
    closeVideoplayer(video);
  });
  videoPlayer.append(close);

  const filmName = createElement('div', { class: 'film-name' });
  filmName.innerText = episode.name;
  videoPlayer.append(filmName);

  const controls = createElement('div', { class: 'controls' });
  controls.append(getTimelineElement());
  controls.append(btnControlsRender());

  videoPlayer.append(controls);
  video.play();
  hideControlsPanel(video, videoPlayer);
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    pressHotKey(e, video);
  });
  return videoPlayer;
};

export default videoPlayerRender;
