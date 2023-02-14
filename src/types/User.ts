import { Collection } from './Collection';

export type User = {
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
