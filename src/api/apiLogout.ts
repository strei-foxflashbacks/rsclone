import { URL_LOGOUT } from '../types/constants';
import { OptionsFetch } from '../types/fetch';

export const logoutUser = async ()=> {
  const options: OptionsFetch = {
    method: 'POST',
  };
  await fetch(`${URL_LOGOUT}`, options);
};