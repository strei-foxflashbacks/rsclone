const closeModal = () => {
  const modals = document.querySelectorAll('.modal');
  const background = document.querySelector('.background') as HTMLElement;
  const body = document.querySelector('body') as HTMLElement;
  const poster = document.querySelector('.modal__picture') as HTMLElement;
  if (!body) {
    throw new Error('body is not found');
  }
  modals.forEach((modal) =>  {
    modal.classList.remove('active');
  });
  background.classList.remove('active');
  body.style.overflow = 'visible';
  if (poster) {
    if (!poster.parentElement) {
      throw new Error('poster.parentElement is not found');
    }
    poster.parentElement.removeChild(poster);
  }
};
export default closeModal;
