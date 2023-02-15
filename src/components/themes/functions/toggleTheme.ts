import setThemeStyles from './setThemeStyles';

const toggleTheme = () => {
  const dark = localStorage.getItem('isDark') == 'true';
  localStorage.setItem('isDark', String(!dark));
  const header = document.querySelector('header');
  const body = document.querySelector('body');
  const footer = document.querySelector('footer');
  const trows = document.querySelectorAll('tr');
  if (header && body && footer) {
    setThemeStyles(header);
    setThemeStyles(body);
    setThemeStyles(footer);
  }
  if (trows) {
    trows.forEach(row => setThemeStyles(row));
  }
};

export default toggleTheme;
