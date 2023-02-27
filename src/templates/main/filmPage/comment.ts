import createElement from '../../../helpers/createElement';

const getComment = (commentBody: string): HTMLElement => {
  const container = createElement('div', { class: 'comment' });
  const person = createElement('div', { class: 'comment__person' });
  const name = createElement('p', { class: 'comment__name' }, 'Ольга Ивановна');
  const avatar = createElement('img', { class: 'comment__avatar', src: '/assets/avatar.svg' });
  person.append(avatar, name);
  const commentBodyElem = createElement('p', { class: 'comment__body' }, commentBody);
  container.append(person, commentBodyElem);
  return container;
};
export default getComment;
