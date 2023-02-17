import { Film, Person } from '../../../types/types';

export const ser: Film = {
  id: 1,
  name: 'Good doctor',
  src: '',
  poster: './assets/poster.jpg',
  trailer: '',
  thumbnails: [''],
  description: '2019-',
  rating: 7.5,
  reviews: [''],
  genre: 'драма',
  type: 'serial',
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
  serial: {
    season: [1, 2],
    episode: [1, 2, 3, 4],
  },
};
export const filmmm: Film = {
  id: 1,
  name: 'Avatar',
  src: '',
  poster: './assets/poster.jpg',
  trailer: '',
  thumbnails: [''],
  description: '2012',
  rating: 5.0,
  reviews: [''],
  genre: 'боевик, драма, фантастика',
  type: 'film',
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
};

export const person1: Person = {
  id: 1234,
  img: './assets/person.jpg',
  imgMin: null,
  nameRu: 'Хью Джекман',
  nameEn: 'Hugh Jackman',
  profession: 'actor, producer',
  birth: '12 октября 1968',
  filmIds: [12, 32, 34, 4534],
};

type Collection = {
  playlist: number[],
  films: number[],
  persons: number[],
};

type User = {
  id: string,
  name: string,
  email: string,
  password: string,
  userpic: string,
  birthday: string,
  sex: null | 'Мужчина' | 'Женщина',
  phone: string,
  collection: Collection,
};


export const userData: User =   {
  id: '1',
  name: 'John',
  email: 'abc@gmail.com',
  password: '123',
  birthday: '',
  userpic: '',
  sex: null,
  phone: '',
  collection: {
    playlist: [1, 2, 3, 4, 11, 12],
    films: [1, 2, 3, 4, 5, 11, 12],
    persons: [1, 2, 3, 4],
  },
};