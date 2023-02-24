import { getFilms } from '../../../../api/apiFilms';
import { Film } from '../../../../types/Film';

const getRandomNum = (endNum: number) => Math.floor(Math.random() * endNum);

const getRandomFilm = async (): Promise<Film> => {
  const { films, countFilms } = (await getFilms());
  const film: Film = films[getRandomNum(countFilms)];
  return film;
};

export default getRandomFilm;