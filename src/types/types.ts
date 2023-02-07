export interface IAttribute {
  [key: string]: string;
}

export type TVideoControlsSettingsItems = 'subtitle' | 'quality' | 'speed';

export type TSubtitleSize = 'small' | 'standard' | 'large';

export type TQualityVideo = 'auto' | '1440p' | '1080p' | '720p' | '480p';

export type TSpeedVideo =
  | '0.25x'
  | '0.5x'
  | '0.75x'
  | 'normal'
  | '1.25x'
  | '1.5x'
  | '1.75x'
  | '2x';

export type TVideoControlsSubtitleSoundItems =
  | 'sound'
  | 'language'
  | 'subtitle';
