import createElement from '../../../helpers/createElement';
import { openVideoPlayer } from '../../../helpers/openVideoPlayer';
import { Episode } from '../../../types/Episode';

const getSerialEpisode = (id: number, episode: Episode, season?: number, order?: number): HTMLElement => {
  const container = createElement('div', { class: 'episode' });
  container.style.backgroundImage = `url(${episode.thumbnail})`;
  const orderAndRate = createElement('div', {
    class: 'episode__order-and-rate',
  });
  if (season && order) {
    const orderElem = createElement(
      'div',
      { class: 'episode__order' },
      `Сезон ${season} / серия ${order}`,
    );

    orderAndRate.append(orderElem);
  }
  const nameElem = createElement('div', { class: 'episode__name' }, episode.name);
  const playIcon = createElement('img', {
    class: 'episode__play',
    src: '/assets/playTrailer.svg',
  });

  container.append(orderAndRate, playIcon, nameElem);
  playIcon.addEventListener('click', () => {
    openVideoPlayer(id, false, season, order);
  });
  return container;
};

export default getSerialEpisode;
