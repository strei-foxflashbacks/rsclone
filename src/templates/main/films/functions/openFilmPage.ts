import router from '../../../../components/router/router';
import getFilmById from '../../../../components/controllers/filmPageController';
import setCurrentPage from '../../../../pages/currentPage';
import getFilmPage from '../../filmPage/filmPage';

const openFilmPage = (event: Event): void => {
  const target = event.target as HTMLElement;

  if (target.closest('.big-element')) {
    const general = target.closest('.big-element');
    if (!general) {
      throw new Error('film container is not found');
    }

    const id = Number(general.getAttribute('data-id'));
    if (!id) {
      throw new Error('film\'s id is not found!');
    }

    router.add('/film/(:any)', (idFilm: string) => {
      const filmById = getFilmById(Number(idFilm));
      if (filmById) {
        setCurrentPage(getFilmPage(filmById));
      }
    });

    router.navigateTo(`/film/${id}`);

  }
};

export default openFilmPage;
