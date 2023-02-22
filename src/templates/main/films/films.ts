import createElement from '../../../helpers/createElement';
import { mainPageController } from '../../../components/controllers/filmPageController';
import getMainPageSwiper from './functions/getMainPageSwiper';

const getMainContent = async () => {
  const mainContent = createElement('section', { class: 'films' });
  mainContent.append(await getMainPageSwiper());
  mainPageController(mainContent);
  window.addEventListener('scroll', () => {
    const {
      scrollTop,
      scrollHeight,
      clientHeight,
    } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      mainPageController(mainContent);
    }
  });
  return mainContent;
};
export default getMainContent;
