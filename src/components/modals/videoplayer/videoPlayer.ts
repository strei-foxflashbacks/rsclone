import createElement from '../../../helpers/createElement';
import { SKIP_BACKWARD, SKIP_FORWARD } from '../../../types/constants';
import {
  closeVideoplayer,
  playPauseVideo,
  skip,
  toggleFullscreen,
} from './functions/videoplayerControls';

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
import changeSettings from './functions/changeSettings';
import videoPlayerEvents from './functions/events';

const defaultSubtitleSize = 'standard';
const defaultQuality = 'auto';
const defaultSpeedVideo = 'normal';

const defaultSound = 'stereo';
const defaultSubtitle = 'off';

let videoElement: HTMLVideoElement;
let videoPlayerElement: HTMLElement;
let lastVolumeRange: number;

const getSubtitlesInfo = (episode: Episode) => {
  subSettingSubtitleSound.language = [];
  episode.subtitles.forEach((sub) => {
    const tempObj: { [key in 'label' | 'srcLang']: string } = {
      label: sub.label,
      srcLang: sub.srcLang,
    };
    subSettingSubtitleSound.language.push(tempObj);
  });
};

const btnControlsRender = (episode: Episode) => {
  const btnControls = createElement('div', { class: 'controls-buttons' });
  const btnControlsLeft = createElement('div', {
    class: 'controls-buttons-left',
  });
  const playPause = <HTMLButtonElement>createElement('button', {
    class: 'controls-btn play-pause',
  });  
  const skipBackward = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn skip-btn skip-backward' })
  );  
  const skipForward = <HTMLButtonElement>(
    createElement('button', { class: 'controls-btn skip-btn skip-forward' })
    );
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
  volumeContainer.append(volumeBtn, volumeRange);
  btnControlsLeft.append(playPause, skipBackward, skipForward, volumeContainer);

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
  getSubtitlesInfo(episode);
  const defaultLanguage = subSettingSubtitleSound.language[0].srcLang || 'en';
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
      const temp = typeof itemSubSettings === 'string' ? itemSubSettings : itemSubSettings.srcLang;
      const activeSubSettingsItem = [
        defaultSound,
        defaultLanguage,
        defaultSubtitle,
      ].includes(temp);
      const activeSubSettingsClass = activeSubSettingsItem
        ? 'active-subsettings'
        : '';
      const subSettingsItem = createElement(
        'li',
        {
          class: `subsettings-item subsettings-item-${item} ${activeSubSettingsClass}`,
          id: `${temp}`,
        },
        `${typeof itemSubSettings === 'string' ? itemSubSettings : itemSubSettings.label}`,
      );
      subSettingsItems.append(subSettingsItem);
    });

    subtitleSoundItem.append(titleItem, subSettingsItems);
    subSettingsItems.addEventListener('click', (e: Event) => {
      changeSettings(e, videoElement, defaultLanguage);
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
      changeSettings(e, videoElement, defaultLanguage);
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

  btnControlsRight.append(
    subtitleSoundContainer,
    settingsContainer,
    fullscreen,
  );
  btnControls.append(btnControlsLeft, btnControlsRight);

  playPause.addEventListener('click', () => {
    playPauseVideo(videoElement);
  });
  skipBackward.addEventListener('click', () => {
    iconCenterAnimate('skip-backward');
    skip(videoElement, SKIP_BACKWARD);
  });
  skipForward.addEventListener('click', () => {
    iconCenterAnimate('skip-forward');
    skip(videoElement, SKIP_FORWARD);
  });
  volumeRange.addEventListener('input', () => {
    videoElement.muted = false;
    videoElement.volume = +volumeRange.value;
  });
  volumeBtn.addEventListener('click', () => {
    if (!videoElement.muted) {
      lastVolumeRange = videoElement.volume;
      videoElement.volume = 0;
      videoElement.muted = true;
    } else {
      videoElement.muted = false;
      videoElement.volume = lastVolumeRange;
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
  fullscreen.addEventListener('click', () => {
    toggleFullscreen(videoPlayerElement);
  });
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
  videoPlayerElement = videoPlayer;
  video.poster = episode.thumbnail;
  const close = createElement('div', { class: 'close-video' });
  close.addEventListener('click', () => {
    closeVideoplayer(video);
  });
  const filmName = createElement('div', { class: 'film-name' });
  if (episode.name) filmName.innerText = episode.name;

  const controls = createElement('div', { class: 'controls' });
  controls.append(getTimelineElement(episode.snapshots), btnControlsRender(episode));

  addSubtitles(episode.subtitles);
  hideControlsPanel(video, videoPlayer);
  videoPlayerEvents(videoPlayer, video);
  videoPlayer.append(videoPlayerIconCenter, video, close, filmName, controls);
  video.play();
  return videoPlayer;
};

export default videoPlayerRender;
