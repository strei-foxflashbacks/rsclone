import clearElement from '../../../../pages/clearElement';
import { filmPageController } from '../../../../components/controllers/filmPageController';

const openFilmPage = (event: Event): void => {
  const main = document.querySelector('main');
  if (!main) {
    throw new Error('main is not found!');
  }
  clearElement(main);


  const target = event.target as HTMLElement;
  if (target.closest('.big-element')) {
    const general = target.closest('.big-element');
    if (!general) {
      throw new Error('film container is not found');
    }

    const id = general.getAttribute('data-id');
    if (!id) {
      throw new Error('film\'s id is not found!');
    }
    filmPageController(id);
  }
};

export default openFilmPage;
