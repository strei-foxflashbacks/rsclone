import { URL_LOGIN } from '../types/constants';
import { OptionsFetch } from '../types/fetch';
import { UserLogin } from '../types/User';

export const loginUser = async (userParam: UserLogin)=> {
  const options: OptionsFetch = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userParam),
  };
  const response = await fetch(`${URL_LOGIN}`, options);
  return response;
};

