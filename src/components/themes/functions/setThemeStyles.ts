
const setThemeStyles = (theme: string): void => {
  const body = document.querySelector('body');
  if (!body) {
    throw new Error('body is not found');
  }
  console.log(theme);
  body.classList.add('dark-theme');
};
export default setThemeStyles;
