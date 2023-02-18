import createElement from '../../../helpers/createElement';

const getGroupOfPosters = (): HTMLElement => {
  const materials = createElement('div', { class: 'materials' });
  const trailer = createElement('div', { class: 'materials__trailer' });
  trailer.style.backgroundImage = 'url(\'/assets/poster.jpg\')';

  const middlePoster = createElement('div', { class: 'materials__middle' });
  middlePoster.style.backgroundImage = 'url(\'/assets/poster.jpg\')';

  const materialsMiniGroup = createElement('div', { class: 'materials__group' });
  const miniPoster1 = createElement('div', { class: 'materials__mini' });
  miniPoster1.style.backgroundImage = 'url(\'/assets/poster.jpg\')';

  const miniPoster2 = createElement('div', { class: 'materials__mini' });
  miniPoster2.style.backgroundImage = 'url(\'/assets/poster.jpg\')';

  const miniPoster3 = createElement('div', { class: 'materials__mini' });
  miniPoster3.style.backgroundImage = 'url(\'/assets/poster.jpg\')';

  const miniPoster4 = createElement('div', { class: 'materials__mini' });
  miniPoster4.style.backgroundImage = 'url(\'/assets/poster.jpg\')';
  materialsMiniGroup.append(miniPoster1, miniPoster2, miniPoster3, miniPoster4);

  const bigPoster = createElement('div', { class: 'materials__big' });
  bigPoster.style.backgroundImage = 'url(\'/assets/poster.jpg\')';


  materials.append(trailer, middlePoster, materialsMiniGroup, bigPoster);

  return materials;
};
export default getGroupOfPosters;




