import setThemeStyles from './setThemeStyles';

const toggleTheme = () => {
  const dark = localStorage.getItem('isDark') == 'true';
  localStorage.setItem('isDark', String(!dark));
  const authorization = document.querySelector('.authorization__inner-container') as HTMLElement;
  const header = document.querySelector('header');
  const shadows = document.querySelectorAll('.shadow');
  const body = document.querySelector('body');
  const footer = document.querySelector('footer');
  if (header && body && footer) {
    setThemeStyles(header);
    setThemeStyles(body);
    setThemeStyles(footer);
  }
  if (authorization) {
    setThemeStyles(authorization);
  }
  shadows.forEach(element => {
    const item = element as HTMLElement;
    setThemeStyles(item);
  });
};

export default toggleTheme;
