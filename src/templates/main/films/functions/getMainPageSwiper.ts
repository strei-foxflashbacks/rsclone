import createElement from '../../../../helpers/createElement';
import { Swiper, Pagination, Autoplay } from 'swiper';
import '../../../../../node_modules/swiper/swiper-bundle.css';
import { COUNT_SLIDES_ON_MAIN_PAGE } from '../../../../types/constants';
import getFilmElement from '../filmElement';
import getRandomFilm from './getRandomFilm';

const getMainPageSwiper = async () => {
  const swiperContainer = createElement('div', { class: 'swiper' });
  const swiperWrapper = createElement('div', { class: 'swiper-wrapper' });
  const swiperPagination = createElement('div', { class: 'swiper-pagination' });
  
  for (let i = 0; i < COUNT_SLIDES_ON_MAIN_PAGE; i++) {
    const slide = createElement('div', { class: 'swiper-slide', lazy: 'true' });
    const randFilm = await getRandomFilm();
    slide.append(getFilmElement(randFilm));
    swiperWrapper.append(slide);
  }

  swiperContainer.append(swiperWrapper, swiperPagination);
  new Swiper(swiperContainer, {
    autoplay: {
      delay: 3000,
    },
    modules: [Pagination, Autoplay],
    pagination: {
      el: swiperPagination,
      clickable: true,
    },
  });

  return swiperContainer;
};

export default getMainPageSwiper;