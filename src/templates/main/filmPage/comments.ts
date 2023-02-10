import createElement from '../../../helpers/createElement';
import handleCommentAdding from './functions/handleCommentAdding';

const getComments = (): HTMLElement => {
  const container = createElement('div', { class: 'comments' });
  const title = createElement('div', { class: 'comments__title' }, 'Отзывы');
  const form = createElement('form', { class: 'comments__form', action: '#' });
  const textarea = createElement('textarea', { class: 'comments__textarea', placeholder: 'Ваше сообщение...', rows: '3' });
  const button = createElement('button', { class: 'comments__button button', type: 'submit' }, 'Отправить');
  button.addEventListener('click', handleCommentAdding);
  container.append(title, form, textarea, button);
  return container;
};
export default getComments;
