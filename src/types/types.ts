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

export type Person = {
  id: number;
  img: string | null;
  imgMin: string | null;
  nameRu: string;
  nameEn: string;
  profession: string;
  birth: string | null;
  filmIds: number[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export enum Themes {
  'dark' = 'dark',
  'light' = 'light',
}
