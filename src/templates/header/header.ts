import createElement from '../../helpers/createElement';

const getHeader = () :HTMLElement => {
  const header = createElement('header', { class: 'header-container', id: '1' }, 'header');
  return header;

  // принимать из другой функции компонент кнопки авторизации (чтобы обновлять состояние)

};
export default getHeader;
