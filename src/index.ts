//styles import

import './style.scss';
import videoPlayerRender from './components/modals/videoplayer/videoPlayer';
import createElement from './helpers/createElement';
import { Film } from './types/types';

import './components/assets/videos/video.mp4';
import './components/assets/videos/video2.mp4';
import './components/assets/videos/video-en.vtt';
import './components/assets/videos/video-ru.vtt';
import './components/assets/videos/video2-en.vtt';
import './components/assets/videos/video2-ru.vtt';

const films: Film[] = [
  {
    id: 1,
    name: 'John Wick 4',
    src: './assets/video.mp4',
    poster: '',
    trailer: '',
    reviews: '',
    description: '',
    rating: 1,
    thumbnails: [
      './assets/preview0.png',
      './assets/preview1.png',
      './assets/preview2.png',
      './assets/preview3.png',
      './assets/preview4.png',
      './assets/preview5.png',
      './assets/preview6.png',
      './assets/preview7.png',
      './assets/preview8.png',
      './assets/preview9.png',
      './assets/preview10.png',
      './assets/preview11.png',
      './assets/preview12.png',
      './assets/preview13.png',
      './assets/preview14.png',
    ],
    subtitles: [
      {
        src: './assets/video-en.vtt',
        srclang: 'en',
        label: 'English',
      },
      {
        src: './assets/video-ru.vtt',
        srclang: 'ru',
        label: 'Russian',
      },
    ],
    genre: '',
    type: 'film',
  },
  {
    id: 2,
    name: 'Avatar 2',
    src: './assets/video2.mp4',
    poster: '',
    trailer: '',
    reviews: '',
    description: '',
    rating: 1,
    thumbnails: [
      './assets/preview0.png',
      './assets/preview1.png',
      './assets/preview2.png',
      './assets/preview3.png',
      './assets/preview4.png',
      './assets/preview5.png',
      './assets/preview6.png',
      './assets/preview7.png',
      './assets/preview8.png',
      './assets/preview9.png',
      './assets/preview10.png',
      './assets/preview11.png',
      './assets/preview12.png',
      './assets/preview13.png',
      './assets/preview14.png',
    ],
    subtitles: [
      {
        src: './assets/video2-en.vtt',
        srclang: 'en',
        label: 'English',
      },
      {
        src: './assets/video2-ru.vtt',
        srclang: 'ru',
        label: 'Russian',
      },
    ],
    genre: '',
    type: 'film',
  },
];
//assets import

// require.context('./assets', false, /\.(?:ico|gif|png|jpg|jpeg|svg|ogg|mp3|wav)$/i);

const btn1 = createElement('button', { class: 'btn-film' }, `${films[0].name}`);
const btn2 = createElement('button', { class: 'btn-film' }, `${films[1].name}`);

document.body.append(btn1);
document.body.append(btn2);

const modalPlayer = createElement('div', { class: 'modal-player' });
document.body.append(modalPlayer);

btn1.addEventListener('click', () => {
  modalPlayer.innerHTML = '';
  modalPlayer.append(videoPlayerRender(films[0]));
  modalPlayer.style.display = 'block';
  btn1.blur();
});
btn2.addEventListener('click', () => {
  modalPlayer.innerHTML = '';
  modalPlayer.append(videoPlayerRender(films[1]));
  modalPlayer.style.display = 'block';
  btn2.blur();
});

// const src = './assets/video.mp4';
// document.body.append(videoPlayerRender(src));
