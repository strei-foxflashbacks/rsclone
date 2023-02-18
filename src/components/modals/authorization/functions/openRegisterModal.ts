const openRegisterModal = () => {
  const body = document.querySelector('body');
  if (!body) {
    throw new Error('body is not found');
  }
  body.style.overflow = 'hidden';

  const modal = document.querySelector('.register');
  const modalAuth = document.querySelector('.authorization');
  if (!modal || !modalAuth) {
    throw new Error('modal or background is not found');
  }
  modal.classList.add('active');
  modalAuth.classList.remove('active');

};

export default openRegisterModal;