import createElement from '../../../helpers/createElement';

const getAddOrRemoveButton = (path: string, innerText: string) => {
  const button = createElement('button', { class: 'adding-button' });
  button.innerText = innerText;
  return button;
};
export default getAddOrRemoveButton;
