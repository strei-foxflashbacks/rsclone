import Router from 'vanilla-router';
import setCurrentPage from '../../pages/currentPage';
import getMainPage from '../../pages/mainPage';
import getFilmPage from '../../templates/main/filmPage/filmPage';
import getFilmById from '../controllers/filmPageController';

const router = new Router({
  mode: 'history',
  root: '/',
  page404: function (path) {
    alert('"/' + path + '" Page not found');
  },
});
console.log('init');
export default router;

router.add(router.root, () => {
  setCurrentPage(getMainPage());
});
router.add('/film/(:any)', (id: string) => {
  const filmById = getFilmById(Number(id));
  if (filmById) {
    setCurrentPage(getFilmPage(filmById));
  }
});

export function goBack() {
  const back = document.querySelector('#back');
  if (back) {
    back.addEventListener('click', () => {
      router.back();
    });
  }
}
