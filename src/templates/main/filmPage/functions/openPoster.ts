import createElement from '../../../../helpers/createElement';
import closeModal from '../../../../components/modals/functions/closeModal';

const openPoster = (event: Event): void => {
  const target = event.target as HTMLElement;
  const pictureUrl = target.style.backgroundImage;
  const background = document.querySelector('.background') as HTMLElement;

  if (!background) {
    throw new Error('background is not found');
  }
  const body = document.querySelector('body');
  if (!body) {
    throw new Error('body is not found');
  }
  body.style.overflow = 'hidden';
  const container = document.querySelector('.materials');
  if (!container) {
    throw new Error('materials is not found');
  }

  background.classList.add('active');
  const picture = createElement('div', { class: 'modal__picture' });
  picture.style.backgroundImage = pictureUrl;
  container.insertAdjacentElement('beforebegin', picture);
  picture.addEventListener('click', closeModal);
};

export default openPoster;
