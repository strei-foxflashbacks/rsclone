import createElement from '../../../helpers/createElement';

const getSerialEpisode = (
  order: number,
  name: string,
  rate: boolean,
): HTMLElement => {
  const container = createElement('div', { class: 'episode' });
  container.style.backgroundImage = "url('./assets/poster.jpg')";
  const orderAndRate = createElement('div', {
    class: 'episode__order-and-rate',
  });
  if (order) {
    const orderElem = createElement(
      'div',
      { class: 'episode__order' },
      `серия ${order}`,
    );
    const rateValue = rate ? 'бесплатно' : 'по подписке';
    const rateElem = createElement(
      'div',
      { class: 'episode__rate' },
      rateValue,
    );
    orderAndRate.append(orderElem, rateElem);
  }
  const nameElem = createElement('div', { class: 'episode__name' }, name);
  const playIcon = createElement('img', {
    class: 'episode__play',
    src: './assets/playTrailer.svg',
  });

  container.append(orderAndRate, playIcon, nameElem);
  return container;
};

export default getSerialEpisode;
