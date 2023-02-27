import createElement from '../../helpers/createElement';
import createStar from './ratingStarElement';
import { StarColor } from '../../types/starColors';

const getRatingElement = (rating: number) : HTMLElement => {
  const ratingElem = createElement('div', { class: 'rating' });
  for (let i = 0; i < rating; i++) {
    const star = createStar(StarColor.yellow) as HTMLElement;
    ratingElem.append(star);
  }
  if (rating < 5) {
    for (let i = 0; i < (5 - rating); i++) {
      const star = createStar(StarColor.grey) as HTMLElement;
      ratingElem.append(star);
    }
  }
  return ratingElem;
};
export default getRatingElement;
