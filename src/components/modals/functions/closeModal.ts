const closeModal = (event: Event) => {
  const target = event.target as HTMLElement;
  const crossButton = document.querySelector('.close');
  const modal = document.querySelector('.modal') as HTMLElement;
  const background = document.querySelector('.background') as HTMLElement;
  const body = document.querySelector('body') as HTMLElement;
  if (target === crossButton || target === background) {
    if (!background.parentElement || !modal.parentElement) {
      throw new Error('background.parentElement or modal.parentElement is not found');
    }
    background.parentElement.removeChild(background);
    modal.parentElement.removeChild(modal);
    if (!body) {
      throw new Error('body is not found');
    }
    body.style.overflow = 'visible';
  }
};
export default closeModal;
