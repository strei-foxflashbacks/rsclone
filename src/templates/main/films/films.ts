import createElement from '../../../helpers/createElement';
import { mainPageController } from '../../../components/controllers/filmPageController';
import getMainPageSwiper from './functions/getMainPageSwiper';
import pagination from './functions/pagination';

const getMainContent = async () => {
  const mainContent = createElement('section', { class: 'films' });
  mainContent.append(await getMainPageSwiper());
  mainPageController(mainContent);
  window.addEventListener('scroll', pagination);
  return mainContent;
};
export default getMainContent;
