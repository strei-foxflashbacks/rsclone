import { Film } from '../../../../types/Film';

const getCountEpisodes = (ser: Film): number => {
  const count = ser.serial!.seasons.reduce((acc, season) => acc + season.episodes.length, 0);
  return count;
};

export default getCountEpisodes;