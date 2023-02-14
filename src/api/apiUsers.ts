import { URL_USERS } from '../types/constants';
import { OptionsFetch } from '../types/fetch';
import { User } from '../types/User';

export const getUser = async () => {
  const response = await fetch(`${URL_USERS}`);
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
