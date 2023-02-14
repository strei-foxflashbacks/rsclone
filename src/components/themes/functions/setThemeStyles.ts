
const setThemeStyles = (): void => {
  const body = document.querySelector('body');
  // const header = document.querySelector('.header-container');
  // const buttonBack = document.querySelector('.season__back-arrow');
  // const textarea = document.querySelector('textarea');
  // const inputs = document.querySelectorAll('input');
  // const footer = document.querySelector('.footer-container');
  // const tHeads = document.querySelectorAll('.film-page__th');
  // const tRows = document.querySelectorAll('.film-page__tr');
  // const addingButtons = document.querySelectorAll('.adding-button');
  // const authorization = document.querySelector('.authorization__inner-container');
  if (!body) {
    throw new Error('body is not found');
  }

  if (localStorage.getItem('isDark') == 'true') {
    body.classList.add('dark-theme');
    body.classList.remove('white-theme');

  } else {
    body.classList.add('white-theme');
    body.classList.remove('dark-theme');
  }

  //news
  const newsText = document.querySelectorAll('.subtitle');
  newsText.forEach(newsItem => {
    const item = newsItem as HTMLElement;
    item.classList.add('dark-theme');
  });


};
export default setThemeStyles;
