import getItemFromLS from '../../localStorage/getItemFromLS';
import { Themes } from '../../../types/types';

const setThemeInLS = (theme: Themes): void => {
  const themes = getItemFromLS('themes');
  if (themes.length < 1) {
    themes.push(theme);
    localStorage.setItem('themes', JSON.stringify(themes));
  }
};
export default setThemeInLS;
