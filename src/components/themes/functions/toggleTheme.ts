import setThemeStyles from './setThemeStyles';

const toggleTheme = () => {

  const dark = localStorage.getItem('isDark') == 'true';
  localStorage.setItem('isDark', String(!dark));
  setThemeStyles();

};

export default toggleTheme;
