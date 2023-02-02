//styles import

import './style.scss';
import './components/assets/videos/video.mp4';
import videoPlayerRender from './components/modals/videoplayer/videoPlayer';

//assets import

// require.context('./assets', false, /\.(?:ico|gif|png|jpg|jpeg|svg|ogg|mp3|wav)$/i);
const src = './assets/video.mp4';
document.body.append(videoPlayerRender(src));
