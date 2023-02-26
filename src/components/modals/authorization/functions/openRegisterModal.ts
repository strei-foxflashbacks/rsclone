import hideBody from '../../../../helpers/hideBody';

const openRegisterModal = () => {
  hideBody();
  const modal = document.querySelector('.register');
  const modalAuth = document.querySelector('.authorization');
  if (!modal || !modalAuth) {
    throw new Error('modal or background is not found');
  }
  modal.classList.add('active');
  modalAuth.classList.remove('active');
  const emailElem = document.querySelector('#register-email') as HTMLInputElement;
  const passwordElem = document.querySelector('#register-password') as HTMLInputElement;

  const emailLoginElem = document.querySelector('#email') as HTMLInputElement;
  const passwordLoginElem = document.querySelector('#password') as HTMLInputElement;

  emailElem.value = emailLoginElem.value;
  passwordElem.value = passwordLoginElem.value;
};

export default openRegisterModal;