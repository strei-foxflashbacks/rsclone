import { getTokenFromLocalStorage } from '../components/modals/authorization/functions/tokenInLocalStorage';
import { URL_USERS } from '../types/constants';
import { OptionsFetch } from '../types/fetch';
import { User } from '../types/User';

export const getUser = async () => {
  const options: OptionsFetch = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getTokenFromLocalStorage()}`,
    },
  };
  const response = await fetch(`${URL_USERS}`, options);
  if (response.status !== 200) return null;
  const user: User = await response.json();
  return user;
};

export const updateUser = async (updateData: User) => {
  const options: OptionsFetch = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateData),
  };
  const response = await fetch(`${URL_USERS}`, options);
  const user: User = await response.json();
  return user;
};
