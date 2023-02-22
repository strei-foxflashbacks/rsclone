import { mainPageController } from '../../../../components/controllers/filmPageController';

const pagination = () => {

  const mainContent = <HTMLElement>document.querySelector('.films');
  if (!mainContent) throw new Error('mainContent don\'t find');
  
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    mainPageController(mainContent);
  }
};

export default pagination;