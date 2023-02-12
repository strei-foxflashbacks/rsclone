const setThemeInLS = (themeType: string): void => {
  localStorage.setItem('themes', themeType);
};
export default setThemeInLS;
