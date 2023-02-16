import { TSubtitleSize } from '../../../../types/types';
import { SubtitleFontSize } from './constants';
import { changeActiveSubSettings, offSubtitle, onSubtitle } from './subtitleHelpers';
import { switchVideoSpeed } from './videoplayerControls';

const changeSettings = (e: Event, video: HTMLVideoElement) => {
  const target = <HTMLElement>e.target;
  if (target.className.includes('speed')) {
    switchVideoSpeed(video, target.id);
  }
  if (target.className.includes('size')) {
    const size = <TSubtitleSize>target.id;
    video.style.setProperty(
      '--subtitle-font-size',
      SubtitleFontSize[size],
    );
  }
  if (target.className.includes('subtitle')) {
    if (target.id === 'off') {
      offSubtitle(video);
    } else {
      onSubtitle(video);
    }
  }
  if (target.className.includes('language')) {
    const lang = <'en' | 'ru'>target.id;
    onSubtitle(video, lang);
  }
  changeActiveSubSettings(target);
  target.classList.add('active-subsettings');
};

export default changeSettings;