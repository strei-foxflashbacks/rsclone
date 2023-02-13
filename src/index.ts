//styles import

import './style.scss';

//assets import

require.context('./components/assets', false, /\.(?:ico|gif|png|jpg|jpeg|svg|ogg|mp3|wav)$/i);

import setCurrentPage from './pages/currentPage';
import getNews from './templates/main/news/news';
import getMainContent from './templates/main/films/films';
import setThemeStyles from './components/themes/functions/setThemeStyles';
setThemeStyles();


setCurrentPage([getNews(), getMainContent()]);
