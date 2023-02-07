import createElement from '../../../helpers/createElement';

const getSerialEpisode = (): HTMLElement => {
  const container = createElement('div', { class: 'episode' });
  container.style.backgroundImage = 'url(\'./assets/poster.jpg\')';
  const order = createElement('div', { class: 'episode__order' });
  const name = createElement('div', { class: 'episode__name' });
  const playIcon = createElement('img', { class: 'episode__play' });
  const rate = createElement('div', { class: 'episode__rate' });
  container.append(order, name, playIcon, rate);
  return container;
};

export default getSerialEpisode;
