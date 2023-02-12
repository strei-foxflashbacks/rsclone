import createElement from '../../helpers/createElement';

const getThemeButton = (): HTMLElement => {
  const container = createElement('div', { class: 'theme-element' });
  const circle = createElement('div', { class: 'theme-element__circle' });
  container.append(circle);
  return container;
};
export default getThemeButton;
