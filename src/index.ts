//styles import

import './style.scss';
import setCurrentPage from './pages/defaultPage';
import getNews from './templates/main/news';
import getMainContent from './templates/main/mainContent';
setCurrentPage([getNews(), getMainContent()]);

//assets import

// require.context('./assets', false, /\.(?:ico|gif|png|jpg|jpeg|svg|ogg|mp3|wav)$/i);
