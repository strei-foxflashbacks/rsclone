import { Film } from '../../../../types/types';

export const getDescText = (film: Film): string => {
  let text = '';
  if (film.type === 'serial' && film.serial) {
    const countSeason = `${film.serial.season.length} сезон${
      film.serial.season.length > 1 && 'а'
    }`;
    if (countSeason) text += countSeason + ' / ';
  }
  text += film.genre + ', ' + film.description;

  return text;
};
