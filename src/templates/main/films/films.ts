import createElement from '../../../helpers/createElement';
import { mainPageController } from '../../../components/controllers/filmController';
import getMainPageSwiper from './functions/getMainPageSwiper';

const getMainContent = async () => {
  const mainContent = createElement('section', { class: 'films' });
  mainContent.append(await getMainPageSwiper());
  await mainPageController(mainContent);
  return mainContent;
};
export default getMainContent;
