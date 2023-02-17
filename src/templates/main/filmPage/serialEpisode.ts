import createElement from '../../../helpers/createElement';
import { openVideoPlayer } from '../../../helpers/openVideoPlayer';
import { Episode } from '../../../types/Episode';

const getSerialEpisode = (episode: Episode, season?: number, order?: number): HTMLElement => {
  const rate = true;
  const container = createElement('div', { class: 'episode' });
  container.style.backgroundImage = `url(${episode.thumbnail[0]})`;
  const orderAndRate = createElement('div', {
    class: 'episode__order-and-rate',
  });
  if (season && order) {
    const orderElem = createElement(
      'div',
      { class: 'episode__order' },
      `Сезон ${season} / серия ${order}`,
    );
    const rateValue = rate ? 'бесплатно' : 'по подписке';
    const rateElem = createElement(
      'div',
      { class: 'episode__rate' },
      rateValue,
    );
    orderAndRate.append(orderElem, rateElem);
  }
  const nameElem = createElement('div', { class: 'episode__name' }, episode.name);
  const playIcon = createElement('img', {
    class: 'episode__play',
    src: './assets/playTrailer.svg',
  });

  container.append(orderAndRate, playIcon, nameElem);
  playIcon.addEventListener('click', openVideoPlayer);
  return container;
};

export default getSerialEpisode;
