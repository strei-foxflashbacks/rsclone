import createElement from '../../helpers/createElement';
import toggleTheme from '../../components/themes/functions/toggleTheme';
import setThemeStyles from '../../components/themes/functions/setThemeStyles';

function updateThemeButton(circle: HTMLElement, themeButton: HTMLElement) {
  if (localStorage.getItem('isDark') == 'true') {
    circle.classList.add('dark');
    themeButton.classList.add('theme-active');
  } else {
    circle.classList.remove('dark');
    themeButton.classList.remove('theme-active');
  }
}


const getFooter = (): HTMLElement => {
  const containerFooter = createElement('footer', { class: 'footer-container' });
  const footer = createElement('div', { class: 'footer' });

  const namesContainer = createElement('div', { class: 'footer__names' });
  const name1 = createElement('a', { class: 'footer__item', href: 'https://github.com/BatBB' }, 'BatBB');
  const name2 = createElement('a', { class: 'footer__item', href: 'https://github.com/strei-foxflashbacks' }, 'strei-foxflashbacks');
  const name3 = createElement('a', { class: 'footer__item', href: 'https://github.com/inna1305' }, 'inna1305');
  namesContainer.append(name1, name2, name3);

  const date = createElement('div', {}, '2023');
  const schoolLink = createElement('a', { href: 'https://rs.school/js/' });
  const rsLogo = createElement('img', { src: '/assets/rs_school_js.svg', alt: '', width: '70' });
  schoolLink.append(rsLogo);
  const container = createElement('div', { class: 'footer__end' });
  container.append(date, schoolLink);
  const themeButton = createElement('div', { class: 'theme-element', id: 'theme' });
  const circle = createElement('div', { class: 'theme-element__circle' });
  const icon = createElement('img', { src: '/assets/moon.svg' });
  circle.append(icon);
  themeButton.append(circle);

  footer.append(container, namesContainer, themeButton);
  setThemeStyles(containerFooter);
  containerFooter.append(footer);

  themeButton.addEventListener('click', () => {
    toggleTheme();
    updateThemeButton(circle, themeButton);
  });
  updateThemeButton(circle, themeButton);

  return containerFooter;
};


export default getFooter;
