import {
  TSpeedVideo,
  TVideoControlsSettingsItems,
  TVideoControlsSubtitleSoundItems,
} from '../../../../types/types';

export const settingsItemsName: TVideoControlsSettingsItems[] = [
  'size',
  'quality',
  'speed',
];
export enum ControlsPopupSettingsText {
  size = 'Subtitle size',
  quality = 'Quality video',
  speed = 'Play speed',
}
export const speedVideo: { [key in TSpeedVideo]: number } = {
  '0.25x': 0.25,
  '0.5x': 0.5,
  '0.75x': 0.75,
  normal: 1,
  '1.25x': 1.25,
  '1.5x': 1.5,
  '1.75x': 1.75,
  '2x': 2,
};

export enum SubtitleFontSize {
  small = '80%',
  standard = '100%',
  large = '120%',
}

export const subtitleSoundItemsName: TVideoControlsSubtitleSoundItems[] = [
  'sound',
  'language',
  'subtitle',
];
export enum ControlsPopupSubtitleSoundText {
  sound = 'Sound',
  language = 'Language',
  subtitle = 'Subtitle',
}
type SubSettingSubtitleSound = {
  sound: string[];
  language: { [key: string]: string }[];
  subtitle: string[];
};
export const subSettingSubtitleSound: SubSettingSubtitleSound = {
  sound: ['stereo'],
  language: [],
  subtitle: ['off', 'on'],
};

export const subSettingSettings: {
  [key in TVideoControlsSettingsItems]: string[];
} = {
  size: ['small', 'standard', 'large'],
  quality: ['auto'], //, '1440p', '1080p', '720p', '480p'
  speed: ['0.25x', '0.5x', '0.75x', 'normal', '1.25x', '1.5x', '1.75x', '2x'],
};
