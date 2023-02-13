import getValueFromLS from '../../localStorage/getValueFromLS';

const setButtonStyles = () => {
  const button = document.querySelector('#theme');
  if (!button) {
    throw new Error('button is not found!');
  }
  const circle = button.firstElementChild;
  if (!circle) {
    throw new Error('circle is not found');
  }
  const value = getValueFromLS('themes');
  if (value === 'dark') {
    circle.classList.add('dark');
    button.classList.add('theme-active');
  } else {
    circle.classList.remove('dark');
    button.classList.remove('theme-active');
  }
};
export default setButtonStyles;
