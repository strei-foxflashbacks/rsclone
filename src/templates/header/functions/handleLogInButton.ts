const handleLogInButton = (): void => {
  const body = document.querySelector('body');
  if (!body) {
    throw new Error('body is not found');
  }
  body.style.overflow = 'hidden';

  const modal = document.querySelector('.modal');
  const background = document.querySelector('.background');
  if (!modal || !background) {
    throw new Error('modal or background is not found');
  }
  modal.classList.add('active');
  background.classList.add('active');
};
export default handleLogInButton;
