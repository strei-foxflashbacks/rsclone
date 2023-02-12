export interface Attribute {
  [key: string]: string;
}

//export type PersonsType = 'producers' | 'directors' | 'actors';

export enum AddToPlayListValue {
  'add' = 'Добавить в плейлист',
  'remove' = 'Удалить из плейлиста',
}

export type Film = {
  id: number;
  name: string;
  src: string;
  poster: string;
  trailer: string;
  thumbnails: string[];
  description: string;
  rating: number;
  reviews: string[];
  genre: string;
  type: FilmType;
  serial?: Serial;
};

export type Serial = {
  season: number[];
  episode: number[];
};

export type FilmType = 'film' | 'serial';
