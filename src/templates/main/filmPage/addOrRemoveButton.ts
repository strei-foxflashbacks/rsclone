import createElement from '../../../helpers/createElement';

const getAddOrRemoveButton = (path: string, innerText: string) => {
  const button = createElement('button', { class: 'adding-button' });
  const text = createElement('div', {});
  text.innerText = innerText;
  button.append(text);
  return button;
};
export default getAddOrRemoveButton;
