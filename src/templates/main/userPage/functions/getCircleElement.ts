import createElement from '../../../../helpers/createElement';
import getDashoffset from './getDashoffset';

const circleSvg = `<svg class="rating-svg" width="56" height="56" viewBox="0 0 56 56">
<circle cx="28" cy="28" r="25" fill="none" stroke="none" stroke-width="6" />
<circle class="rating-svg-percent" cx="28" cy="28" r="25" fill="none" stroke="#ffffff" stroke-width="6" stroke-dasharray="157"/>
</svg>`;

const getCircleElement = (rating: number): HTMLElement => {
  const circleRating = createElement('div', { class: 'rating-circle' });
  circleRating.innerHTML = circleSvg;
  const percent = <SVGAElement>circleRating.querySelector('.rating-svg-percent');
  percent.setAttribute('stroke-dashoffset', `${getDashoffset(rating)}`);
  return circleRating;
}; 

export default getCircleElement;
