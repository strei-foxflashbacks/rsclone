const closeModal = () => {
  const modals = document.querySelectorAll('.modal');
  const background = document.querySelector('.background') as HTMLElement;
  const body = document.querySelector('body') as HTMLElement;
  const poster = document.querySelector('.modal__picture') as HTMLElement;
  const errorMsgAuth = document.querySelector('.authorization__error-message') as HTMLElement;
  const errorMsgReg = document.querySelector('.register__error-message') as HTMLElement;
  if (!body) {
    throw new Error('body is not found');
  }
  modals.forEach((modal) =>  {
    modal.classList.remove('active');
  });
  background.classList.remove('active');
  body.style.overflow = 'visible';
  errorMsgAuth.classList.remove('active');
  errorMsgReg.classList.remove('active');

  (document.querySelector('#register-email') as HTMLInputElement).value = '';
  (document.querySelector('#register-password') as HTMLInputElement).value = '';
  (document.querySelector('#email') as HTMLInputElement).value = '';
  (document.querySelector('#password') as HTMLInputElement).value = '';
  
  if (poster) {
    if (!poster.parentElement) {
      throw new Error('poster.parentElement is not found');
    }
    poster.parentElement.removeChild(poster);
  }
};
export default closeModal;
