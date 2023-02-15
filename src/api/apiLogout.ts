import { URL_LOGOUT } from '../types/constants';
import { OptionsFetch } from '../types/fetch';

export const loginUser = async ()=> {
  const options: OptionsFetch = {
    method: 'POST',
  };
  await fetch(`${URL_LOGOUT}`, options);
};