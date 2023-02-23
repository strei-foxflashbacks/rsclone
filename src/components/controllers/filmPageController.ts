import { getFilms } from '../../api/apiFilms';
import getFilmElement from '../../templates/main/films/filmElement';
import { LIMIT_FILM } from '../../types/constants';

let maxPage = 0;
let page = 1;
let isFirst = true;
export const mainPageController = async (main: HTMLElement): Promise<void> => {
  if (isFirst) {
    page = 1;
  }
  if (!maxPage) maxPage = Math.ceil(((await getFilms()).films.length) / LIMIT_FILM);
  if (page > maxPage) {
    isFirst = true;
    return;
  }

  const { films } = await getFilms(page++, LIMIT_FILM);
  films.forEach(film => {
    const filmElement = getFilmElement(film);
    main.append(filmElement);
  });
  isFirst = false;
};
