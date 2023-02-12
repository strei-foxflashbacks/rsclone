import { Themes } from '../../../types/types';
import setThemeInLS from './setThemeInLS';
import setThemeStyles from './setThemeStyles';

const toggleTheme = (event: Event) => {
  const target = event.target as HTMLElement;
  const button = target.closest('#theme');
  let selectedTheme: Themes;

  if (!button) {
    throw new Error('target.closest(button) is not found');
  }
  const circle = button.firstElementChild;
  if (!circle) {
    throw new Error('circle is not found');
  }

  circle.classList.toggle('dark');
  button.classList.toggle('theme-active');

  if (circle.classList.contains('dark') && button.classList.contains('theme-active')) {
    selectedTheme = Themes.dark;
  } else {
    selectedTheme = Themes.light;
  }
  setThemeInLS(selectedTheme);
  setThemeStyles(selectedTheme);

  ////var dark = false;
  // //// получаем доступ ко всей странице и к абзацу с переключателем
  // //var a = document.body;
  // //var p = document.getElementById("select")
  // //
  // //// эта функция будет срабатывать при нажатии на переключатель
  // //function darkLight() {
  // //	// если тёмная тема не активна
  // //	if (!dark) {
  // //		// добавляем класс с тёмной темой ко всей странице
  // //		a.className = "theme-dark";
  // //		// меняем надпись на переключателе
  // //		p.innerHTML = "Включить светлую тему";
  // //	// а если активна —
  // //	} else {
  // //		// добавляем класс со светлой темой ко всей странице
  // //		a.className = "theme-light";
  // //		// меняем надпись на переключателе
  // //		p.innerHTML = "Включить тёмную тему";
  // //	}
  // //
  // //	// меняем значение темы на противоположное
  // //	dark = !dark;
  // //
  // //}

};

// if (!localStorage.getItem('cart')) {
//     localStorage.setItem('cart', '[]');
//   }
//   const storageCart = localStorage.getItem('cart');
//   const objCart = JSON.parse(storageCart!);

//export function getArrayFromLS(name: string) {
//   if (!localStorage.getItem(`${name}`)) {
//     localStorage.setItem(`${name}`, '[]');
//   }
//   const array = localStorage.getItem(`${name}`);
//
//   return JSON.parse(array!)
// }

export default toggleTheme;
