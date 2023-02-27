import { Film } from '../../../../types/Film';

export const getDescText = (film: Film): string => {
  let text = '';
  if (film.type === 'serial' && film.serial) {
    const countSeason = `${film.serial.seasonsQty} сезон${
      film.serial.seasonsQty > 1 && 'а'
    }`;
    if (countSeason) text += countSeason + ' / ';
  }
  text += film.genre;

  return text;
};
