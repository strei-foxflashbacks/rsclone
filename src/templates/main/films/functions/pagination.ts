import { mainPageController } from '../../../../components/controllers/filmController';

const pagination = () => {
  const mainContent = <HTMLElement>document.querySelector('.films');
  if (!mainContent) throw new Error('mainContent don\'t find');

  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const mainContentHeight = mainContent.clientHeight;

  if (scrollTop + clientHeight >= Math.min(scrollHeight, mainContentHeight) - 5) {
    mainPageController(mainContent);
  }
};

export default pagination;
