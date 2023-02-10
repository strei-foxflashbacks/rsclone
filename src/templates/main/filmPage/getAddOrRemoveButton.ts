import createElement from '../../../helpers/createElement';

const getAddOrRemoveButton = (path: string, innerText: string) => {
  const button = createElement('button', { class: 'adding-button' });
  const icon = createElement('img', { class: 'adding-button__icon' });
  const text = createElement('div', {});
  icon.setAttribute('src', `${path}`);
  text.innerText = innerText;
  button.append(icon, text);
  return button;
};
export default getAddOrRemoveButton;
