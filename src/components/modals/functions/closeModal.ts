const closeModal = () => {
  const modal = document.querySelector('.modal') as HTMLElement;
  const background = document.querySelector('.background') as HTMLElement;
  const body = document.querySelector('body') as HTMLElement;
  const emailInput = document.querySelector('#emailOrNumber') as HTMLInputElement;
  const password = document.querySelector('#password') as HTMLInputElement;
  if (emailInput && password && emailInput.value && password.value) {
    emailInput.value = '';
    password.value = '';
  }

  if (!body) {
    throw new Error('body is not found');
  }
  modal.classList.remove('active');
  background.classList.remove('active');
  body.style.overflow = 'visible';
};
export default closeModal;
