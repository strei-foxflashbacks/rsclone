//styles import

import './style.scss';

//assets import
import router from './components/router/router';

require.context(
  './components/assets',
  false,
  /\.(?:ico|gif|png|jpg|jpeg|svg|ogg|mp3|wav)$/i,
);


router.addUriListener();

window.addEventListener('load', () => router.navigateTo(window.location.pathname));
