
const setThemeStyles = (): void => {
  const body = document.querySelector('body');
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
    console.log(item);
    item.classList.add('dark-theme');
  });

  // const addDarkThemeStyle = (element: HTMLElement) => {
  //
  // };

};
export default setThemeStyles;
