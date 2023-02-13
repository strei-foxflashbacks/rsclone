import getComment from '../comment';

const handleCommentAdding = (event: Event): string => {
  const target = event.target as HTMLElement;
  const textarea = target.previousElementSibling as HTMLTextAreaElement;
  if (!target.previousElementSibling) {
    throw new Error('textarea is not found');
  }
  const value = textarea.value;
  const errorMessage = document.querySelector('.comments__error');
  if (!errorMessage) {
    throw new Error('error message element is not found');
  }
  if (!value) {
    errorMessage.classList.add('show');
    return '';
  }
  textarea.value = '';
  const commentsContainer = document.querySelector('.comments');
  if (!commentsContainer) {
    throw new Error('commentsContainer is not found');
  }
  commentsContainer.append(getComment(value));
  return value;
};
export default handleCommentAdding;
