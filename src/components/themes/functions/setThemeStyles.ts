
const setThemeStyles = (element: HTMLElement): void => {
  if (element) {
    if (localStorage.getItem('isDark') == 'true') {
      element.classList.add('dark-theme');
    } else {
      element.classList.remove('dark-theme');
    }
  }
};

export default setThemeStyles;
