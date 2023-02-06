import createElement from '../../../helpers/createElement';
import createStar from './ratingStarElement';
import { StarColor } from '../../../types/star';

const getBigElement = (path: string, title: string, titleEng: string, rating: number, note: string): HTMLElement => {
  const bigElement = createElement('div', {});
  bigElement.style.backgroundImage = `url('${path}')`;
  bigElement.classList.add('films__big-element', 'films__photo');
  const container = createElement('div', { class: 'films__container' });
  const containerShadowing = createElement('div', { class: 'films__container_shadow' });
  const titleElem  = createElement('div', { class: 'films__title' }, title);
  const titleEngElem  = createElement('div', { class: 'films__title_eng' }, titleEng);

  const getStarsSet = () : HTMLElement => {
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

  const noteElem = createElement('p', { class: 'films__note' }, note);
  container.append(titleElem, titleEngElem, getStarsSet(), noteElem);
  bigElement.append(container, containerShadowing);
  return bigElement;
};

export default getBigElement;
