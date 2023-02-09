import createElement from '../../../helpers/createElement';
import getRatingElement from '../../rating/getRatingElement';

const getRecommendation = (photoPath: string, rating: number, title: string, titleEng: string, description: string): HTMLElement => {
  const recommendation = createElement('div', { class: 'recommendation' });
  recommendation.style.backgroundImage = `url('${photoPath}')`;
  const ratingElem = getRatingElement(rating);
  const titleElem = createElement('div', { class: 'recommendation__title' }, title);
  const titleEngElem = createElement('div', { class: 'recommendation__title-eng' }, titleEng);
  const descriptionElem = createElement('div', { class: 'recommendation__description' }, description);
  recommendation.append(ratingElem, titleElem, titleEngElem, descriptionElem);
  return recommendation;
};
export default getRecommendation;
