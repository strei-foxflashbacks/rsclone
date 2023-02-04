import createElement from '../../helpers/createElement';
import newsData from '../../components/newsData';
import getNewsItem from './newsItem';

const getNews = (): HTMLElement => {
  const news = createElement('aside', { class: 'news' });
  newsData.forEach(elem => {
    const newsItem = getNewsItem(elem);
    news.append(newsItem);
  });
  return news;
};
export default getNews;
