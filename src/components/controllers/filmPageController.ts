import { getFilms } from '../../api/apiFilms';
import getFilmElement from '../../templates/main/films/filmElement';
let page = 1;
const limit = 9;
let maxPage = 0;
export const mainPageController = async (main: HTMLElement): Promise<void> => {
  if (!maxPage) maxPage = Math.ceil(((await getFilms()).films.length) / limit);
  if (page > maxPage) return;

  const { films } = await getFilms(page++, limit);
  films.forEach(film => {
    const filmElement = getFilmElement(film);
    main.append(filmElement);
  });
};
