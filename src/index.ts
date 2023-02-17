//styles import

import './style.scss';

//assets import

require.context(
  './components/assets',
  false,
  /\.(?:ico|gif|png|jpg|jpeg|svg|ogg|mp3|wav)$/i,
);

import setCurrentPage from './pages/currentPage';
import getMainPage from './pages/mainPage';

setCurrentPage([getMainPage()]);
