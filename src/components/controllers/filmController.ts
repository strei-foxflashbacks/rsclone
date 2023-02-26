import { getFilms } from '../../api/apiFilms';
import getFilmElement from '../../templates/main/films/filmElement';
import { LIMIT_FILM } from '../../types/constants';

let maxPage = 0;
let page = 1;

export const mainPageController = async (main: HTMLElement): Promise<void> => {
  if (!maxPage) maxPage = Math.ceil(((await getFilms()).films.length) / LIMIT_FILM);
  if (main.childElementCount === 1) page = 1;
  if (page > maxPage) return;  

  const { films } = await getFilms(page++, LIMIT_FILM);
  films.forEach(film => {
    const filmElement = getFilmElement(film);
    main.append(filmElement);
  });
};
