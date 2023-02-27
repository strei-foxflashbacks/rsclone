import createElement from '../../../helpers/createElement';
import { mainPageController } from '../../../components/controllers/filmController';
import getMainPageSwiper from './functions/getMainPageSwiper';
import pagination from './functions/pagination';

const getMainContent = async () => {
  const mainContent = createElement('section', { class: 'films' });
  mainContent.append(await getMainPageSwiper());
  await mainPageController(mainContent);
  document.addEventListener('scroll', pagination);
  return mainContent;
};
export default getMainContent;
