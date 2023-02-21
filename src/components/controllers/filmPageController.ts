import { getFilms } from '../../api/apiFilms';
import getFilmElement from '../../templates/main/films/filmElement';
import { Film } from '../../types/Film';

export const mainPageController = async (main: HTMLElement): Promise<void> => {
  const films: Film[] = (await getFilms()).films;
  films.forEach(film => {
    const filmElement = getFilmElement(film);
    main.append(filmElement);
  });
};
