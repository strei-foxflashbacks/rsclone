import { URL_LOGIN } from '../types/constants';
import { OptionsFetch } from '../types/fetch';

export const loginUser = async (userParam: UserLogin)=> {
  const options: OptionsFetch = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userParam),
  };
  await fetch(`${URL_LOGIN}`, options);
};

type UserLogin = {
  email: string,
  password: string
};