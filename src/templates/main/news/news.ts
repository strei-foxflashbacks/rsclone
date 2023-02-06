import createElement from '../../../helpers/createElement';
import newsData from '../../../components/newsData';
import getNewsItem from './newsItem';

const getNews = (): HTMLElement => {
  const titleComponent = createElement('div', { class: 'title' });
  const title = createElement('h1', { class: 'title__text' }, 'Новости');
  const icon = createElement('img', { class: 'title__icon', src: './assets/news_icon.svg', alt: '' });
  titleComponent.append(icon, title);

  const news = createElement('aside', { class: 'news' });
  news.append(titleComponent);

  newsData.forEach(elem => {
    const newsItem = getNewsItem(elem);
    news.append(newsItem);
  });
  return news;
};
export default getNews;
