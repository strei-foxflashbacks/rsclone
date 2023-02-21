import createElement from '../../../helpers/createElement';
import { mainPageController } from '../../../components/controllers/filmPageController';
import getMainPageSwiper from './functions/getMainPageSwiper';

const getMainContent = () => {
  const mainContent = createElement('section', { class: 'films' });
  mainContent.append(getMainPageSwiper());
  mainPageController(mainContent);
  return mainContent;
};
export default getMainContent;
