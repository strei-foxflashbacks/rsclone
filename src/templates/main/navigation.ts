import createElement from '../../helpers/createElement';
import router from '../../components/router/router';


export const getNavigation = (location: string): HTMLElement => {
  const navigation = createElement('div', { class: 'navigation' });
  const mainPage = createElement('span', { class: 'navigation__item' }, 'Главная');
  mainPage.addEventListener('click', () => {
    router.navigateTo(router.root);
  });
  const currentPage = createElement('span', { class: 'navigation__item' }, location);
  const separator = createElement('span', { class: 'navigation__item' }, ' / ');

  navigation.append(mainPage, separator, currentPage);
  return navigation;
};
