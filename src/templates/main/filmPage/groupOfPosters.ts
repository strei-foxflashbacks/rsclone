import createElement from '../../../helpers/createElement';
import { Film } from '../../../types/Film';

const getGroupOfPosters = (film: Film): HTMLElement => {
  const materials = createElement('div', { class: 'materials' });
  const trailer = createElement('div', { class: 'materials__trailer' });
  trailer.style.backgroundImage = `url(${film.trailer[0].thumbnail})`;

  const middlePoster = createElement('div', { class: 'materials__middle' });
  middlePoster.style.backgroundImage = `url(${film.thumbnails[0]})`;

  const materialsMiniGroup = createElement('div', { class: 'materials__group' });
  for (let i = 1; i < 5; i++) {
    const miniPoster = createElement('div', { class: 'materials__mini' });
    miniPoster.style.backgroundImage = `url(${film.thumbnails[i]})`;
    materialsMiniGroup.append(miniPoster);
  }

  const bigPoster = createElement('div', { class: 'materials__big' });
  bigPoster.style.backgroundImage = `url(${film.thumbnails[5]})`;

  materials.append(trailer, middlePoster, materialsMiniGroup, bigPoster);

  return materials;
};
export default getGroupOfPosters;




