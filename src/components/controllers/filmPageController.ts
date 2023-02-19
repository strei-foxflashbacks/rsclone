import { getFilms } from '../../api/apiFilms';
//import getFilmPage from '../../templates/main/filmPage/filmPage';
import getFilmElement from '../../templates/main/films/filmElement';
import { Film } from '../../types/Film';

// export const filmPageController = async (id: number): Promise<void> => {
//   const main = document.querySelector('main');
//   if (!main) {
//     throw new Error('main is not found');
//   }
//   const films: Film[] = (await getFilms()).films;
//   films.forEach(film => {
//     if (film.id === id) {
//       const filmPage = getFilmPage(film);
//       main.append(filmPage);
//     }
//   });
// };

export const mainPageController = async (main: HTMLElement): Promise<void> => {
  const films: Film[] = (await getFilms()).films;
  films.forEach(film => {
    const filmElement = getFilmElement(film);
    main.append(filmElement);
  });
};
