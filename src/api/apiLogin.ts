import { URL_LOGIN } from '../types/constants';
import { OptionsFetch } from '../types/fetch';
import { getUser } from './apiUsers';

export const loginUser = async (userParam: UserLogin)=> {
  const options: OptionsFetch = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userParam),
  };
  const response = await fetch(`${URL_LOGIN}`, options);
  const token = await response.json();
  // console.log(response);
  // console.log(JSON.stringify(userParam));

  if (response.status === 200) {
    localStorage.token = token;
    // console.log(getValueFromLS('token'));
    getUser();
  }
  if (response.status === 401) {
    console.log('Error');
  }
};

type UserLogin = {
  email: string,
  password: string
};