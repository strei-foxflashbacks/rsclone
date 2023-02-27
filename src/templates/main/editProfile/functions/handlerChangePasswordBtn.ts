import hideBody from '../../../../helpers/hideBody';

const handlerChangePasswordBtn = (): void => {
  hideBody();

  const modal = document.querySelector('.change-password');
  const background = document.querySelector('.background');
  if (!modal || !background) {
    throw new Error('modal or background is not found');
  }
  modal.classList.add('active');
  background.classList.add('active');
};
export default handlerChangePasswordBtn;