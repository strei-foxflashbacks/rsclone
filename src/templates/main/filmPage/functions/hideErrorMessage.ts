const hideErrorMessage = (event: Event) => {
  const errorMessage = document.querySelector('.comments__error');
  console.log(errorMessage);
  if (errorMessage && errorMessage.classList.contains('show')) {
    errorMessage.classList.remove('show');
  }
};
export default hideErrorMessage;
