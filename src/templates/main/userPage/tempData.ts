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
