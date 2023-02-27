//styles import

import './style.scss';

//assets import
import router from './components/router/router';

require.context(
  './components/assets',
  false,
  /\.(?:ico|gif|png|jpg|jpeg|svg|ogg|mp3|wav)$/i,
);
require.context(
  './components/assets/videos',
  false,
  /\.(?:mp4|vtt)$/i,
);


router.addUriListener();

window.addEventListener('load', () => router.navigateTo(window.location.pathname));
