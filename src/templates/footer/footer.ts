import createElement from '../../helpers/createElement';

const getFooter = (): HTMLElement => {
  const containerFooter = createElement('footer', { class: 'footer-container' });
  const footer = createElement('div', { class: 'footer' });
  const name1 = createElement('a', { class: 'footer__item', href: 'https://github.com/BatBB' }, 'BatBB');
  const name2 = createElement('a', { class: 'footer__item', href: 'https://github.com/strei-foxflashbacks' }, 'strei-foxflashbacks');
  const name3 = createElement('a', { class: 'footer__item', href: 'https://github.com/inna1305' }, 'inna1305');

  const date = createElement('div', {}, '2023');
  const schoolLink = createElement('a', { href: 'https://rs.school/js/' });
  const rsLogo = createElement('img', { src: './assets/rs_school_js.svg', alt: '', width: '70' });
  schoolLink.append(rsLogo);
  const container = createElement('div', { class: 'footer__end' });
  container.append(date, schoolLink);

  footer.append(name1, name2, name3, container);
  containerFooter.append(footer);
  return containerFooter;
};
export default getFooter;
