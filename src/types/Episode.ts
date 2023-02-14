import { SubtitlesData } from './SubtitlesData';

export type Episode = {
  name: string,
  thumbnail: string,
  src: string,
  subtitles: SubtitlesData[],
};
