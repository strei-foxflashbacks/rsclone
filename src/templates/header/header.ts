import createElement from '../../helpers/createElement';

const getHeader = () :HTMLElement => {
  const header = createElement('header', { class: 'header-container' }, 'header');
  const logo = createElement('div', { class: 'logo' });
  const logoImg = createElement('img', { src: '../../components/assets/showjet.png' });
  header.append(logo, logoImg);
  return header;

  // принимать из другой функции компонент кнопки авторизации (чтобы обновлять состояние)

};
export default getHeader;
