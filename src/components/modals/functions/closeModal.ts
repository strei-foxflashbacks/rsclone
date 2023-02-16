const closeModal = () => {
  const modals = document.querySelectorAll('.modal');
  const background = document.querySelector('.background') as HTMLElement;
  const body = document.querySelector('body') as HTMLElement;
  const emailInput = document.querySelector('#email') as HTMLInputElement;
  const password = document.querySelector('#password') as HTMLInputElement;
  if (emailInput && password && emailInput.value && password.value) {
    emailInput.value = '';
    password.value = '';
  }

  if (!body) {
    throw new Error('body is not found');
  }
  modals.forEach((modal) =>  {
    modal.classList.remove('active');
  });
  background.classList.remove('active');
  body.style.overflow = 'visible';
};
export default closeModal;
