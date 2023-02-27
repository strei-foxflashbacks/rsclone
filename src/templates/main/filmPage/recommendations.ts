import createElement from '../../../helpers/createElement';
import getRecommendation from './recommendation';

const getRecommendations = (): HTMLElement => {
  const container = createElement('section', { class: 'recommendations' });
  const title = createElement('div', { class: 'recommendations__title' }, 'Похожие');
  const containerRecommendations = createElement('div', { class: 'recommendations__container' });
  const recommendation = getRecommendation('/assets/poster.jpg', 2, 'Лаура и все-все', 'Laura and partners', 'сериал, 2 сезона');

  containerRecommendations.append(recommendation);
  container.append(title, containerRecommendations);
  return container;
};

export default getRecommendations;
