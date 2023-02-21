import createElement from '../../../../helpers/createElement';
import { Swiper, Pagination, Autoplay } from 'swiper';
import '../../../../../node_modules/swiper/swiper-bundle.css';
import { COUNT_SLIDES_ON_MAIN_PAGE } from '../../../../types/constants';

const getMainPageSwiper = () => {
  const swiperContainer = createElement('div', { class: 'swiper' });
  const swiperWrapper = createElement('div', { class: 'swiper-wrapper' });
  const swiperPagination = createElement('div', { class: 'swiper-pagination' });
  
  for (let i = 0; i < COUNT_SLIDES_ON_MAIN_PAGE; i++) {
    const slide = createElement('div', { class: 'swiper-slide' });
    
    swiperWrapper.append(slide);
  }

  swiperContainer.append(swiperWrapper, swiperPagination);
  const sw = new Swiper(swiperContainer, {
    autoplay: {
      delay: 2500,
    },
    modules: [Pagination, Autoplay],
    pagination: {
      el: swiperPagination,
      clickable: true,
    },
  });
  console.log(sw);
  
  // sw.appendSlide(slide2);
  // createSwiper(swiperContainer);
  return swiperContainer;
};

export default getMainPageSwiper;