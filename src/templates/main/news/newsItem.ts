import createElement from '../../../helpers/createElement';
import { INewsRecord } from '../../../types/INewsRecord';
import setThemeStyles from '../../../components/themes/functions/setThemeStyles';

const getNewsItem = (newsData: INewsRecord): HTMLElement => {
  const newsItem = createElement('div', { class: 'news-item' });
  const photo = createElement('div', { style: `background-image: url('${newsData.photoPath}')`, class: 'news-item__photo' });
  const article = createElement('div', { class: 'news-item__article' });
  const shadow = createElement('div', { class: 'shadow' });
  setThemeStyles(shadow);
  const date = createElement('p', { class: 'news-item__date' }, newsData.date);
  const title = createElement('h2', { class: 'subtitle' }, newsData.title);
  const text = createElement('p', { class: 'news-item__text' }, newsData.text);
  article.append(date, title, text, shadow);
  newsItem.append(photo, article);
  return  newsItem;
};

export default getNewsItem;
