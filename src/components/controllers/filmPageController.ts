import { getFilms } from '../../api/apiFilms';
import getFilmElement from '../../templates/main/films/filmElement';
const limit = 9;
let maxPage = 0;
let page = 1;
let isFirst = true;
export const mainPageController = async (main: HTMLElement): Promise<void> => {
  if (isFirst) {
    page = 1;
  }
  if (!maxPage) maxPage = Math.ceil(((await getFilms()).films.length) / limit);
  if (page > maxPage) {
    isFirst = true;
    return;
  }

  const { films } = await getFilms(page++, limit);
  films.forEach(film => {
    const filmElement = getFilmElement(film);
    main.append(filmElement);
  });
  isFirst = false;
};
