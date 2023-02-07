import createElement from '../../../helpers/createElement';

const getSerialEpisode = (): HTMLElement => {
  const container = createElement('div', { class: 'episode' });

  return container;
};

export default getSerialEpisode;
