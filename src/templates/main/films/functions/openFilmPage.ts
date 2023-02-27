import router from '../../../../components/router/router';
const openFilmPage = (event: Event): void => {
  const target = event.currentTarget as HTMLElement;

  const id = Number(target.getAttribute('data-id'));
  if (!id) {
    throw new Error('film\'s id is not found!');
  }

  router.navigateTo(`/film/${id}`);
};

export default openFilmPage;
