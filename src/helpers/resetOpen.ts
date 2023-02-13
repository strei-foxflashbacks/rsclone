const resetOpen = () => {
  const navTitle = document.querySelectorAll('.nav__title');
  navTitle.forEach((title) => {
    title.classList.remove('open');
  });
};

export default resetOpen;
