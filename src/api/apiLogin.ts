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
  const response = await fetch(`${URL_LOGIN}`, options);
  const res = await response.json();
  console.log(response);
  console.log(JSON.stringify(userParam));

  if (response.status === 200) {
    console.log(res);
  }
  if (response.status === 401) {
    console.log('Error');
  }
};

type UserLogin = {
  email: string,
  password: string
};