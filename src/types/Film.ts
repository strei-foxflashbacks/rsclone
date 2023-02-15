import { Episode } from './Episode';
import { Role } from './Role';
import { Serial } from './Serial';
import { Trailer } from './Trailer';

export type Film = {
  id: number,
  slogan: string,
  ratings: number[],
  age: string,
  name: string,
  originalName: string,
  poster: string,
  summary: string,
  trailer: Trailer[],
  thumbnails: string[],
  description: string,
  usersRating: number,
  reviews: string[],
  genre: string,
  release: string[],
  audio: string,
  countries: string,
  actors: Role[],
  director: Role[],
  producers: Role[],
  facts: string[],
  type: 'film' | 'serial',
  studio?: string[],
  wins?: string[],
  serial?: Serial
  film?: Episode,
};
