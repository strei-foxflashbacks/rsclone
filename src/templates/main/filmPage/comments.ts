import createElement from '../../../helpers/createElement';
import handleCommentAdding from './functions/handleCommentAdding';
import hideErrorMessage from './functions/hideErrorMessage';

const getComments = (): HTMLElement => {
  const container = createElement('div', { class: 'comments' });
  const title = createElement('div', { class: 'comments__title' }, 'Отзывы');
  const form = createElement('form', { class: 'comments__form', action: '#' });
  const textarea = createElement('textarea', { class: 'comments__textarea', placeholder: 'Ваше сообщение...', rows: '3', maxlength: '300' });
  const button = createElement('button', { class: 'comments__button button', type: 'submit' }, 'Отправить');
  const error = createElement('p', { class: 'comments__error' }, 'Вы ничего не ввели!');
  button.addEventListener('click', handleCommentAdding);
  textarea.addEventListener('input', hideErrorMessage);
  container.append(title, form, textarea, button, error);
  return container;
};
export default getComments;
