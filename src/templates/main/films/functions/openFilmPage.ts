import router from '../../../../components/router/router';
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

    router.navigateTo(`/film/${id}`);
  }
};

export default openFilmPage;
