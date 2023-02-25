const hideErrorMessage = () => {
  const errorMessage = document.querySelector('.comments__error');
  if (errorMessage && errorMessage.classList.contains('show')) {
    errorMessage.classList.remove('show');
  }
};
export default hideErrorMessage;
