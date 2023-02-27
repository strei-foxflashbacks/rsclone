import hideBody from '../../../helpers/hideBody';

const handleLogInButton = (): void => {
  hideBody();

  const modal = document.querySelector('.authorization');
  const background = document.querySelector('.background');
  if (!modal || !background) {
    throw new Error('modal or background is not found');
  }
  modal.classList.add('active');
  background.classList.add('active');
};
export default handleLogInButton;
