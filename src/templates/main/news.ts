import createElement from '../../helpers/createElement';

const getNews = (): HTMLElement => {
  const news = createElement('aside', { class: 'news' }, 'news');
  return news;
};
export default getNews;
