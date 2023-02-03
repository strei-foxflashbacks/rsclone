//styles import

import './style.scss';

//assets import

require.context('./src/assets', false, /\.(?:ico|gif|png|jpg|jpeg|svg|ogg|mp3|wav)$/i);

import setCurrentPage from './pages/currentPage';
import getNews from './templates/main/news';
import getMainContent from './templates/main/mainContent';



setCurrentPage([getNews(), getMainContent()]);
