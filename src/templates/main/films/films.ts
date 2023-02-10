import createElement from '../../../helpers/createElement';
import { mainPageController } from '../../../components/controllers/filmPageController';


const getMainContent = () => {
  const mainContent = createElement('main', { class: 'films' });
  mainPageController(mainContent);
  return mainContent;
};
export default getMainContent;
