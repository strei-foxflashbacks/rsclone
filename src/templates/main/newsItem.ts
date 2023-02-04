import createElement from '../../helpers/createElement';
import { INewsRecord } from '../../types/INewsRecord';

const getNewsItem = (newsData: INewsRecord): HTMLElement => {
  const newsItem = createElement('div', { class: 'news-item' });
  const photo = createElement('img', { src: newsData.photoPath, class: 'news-item__photo' });
  const article = createElement('div', { class: 'news-item__article' });
  const date = createElement('p', { class: 'news-item__date' }, newsData.date);
  const title = createElement('h2', { class: 'subtitle' }, newsData.title);
  const text = createElement('p', { class: 'news-item__text' }, newsData.text);
  article.append(date, title, text);
  newsItem.append(photo, article);
  return  newsItem;
};
