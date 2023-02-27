import { getTokenFromLocalStorage } from '../components/modals/authorization/functions/tokenInLocalStorage';
import { URL_USERS } from '../types/constants';
import { OptionsFetch } from '../types/fetch';
import { User, UserUpdate } from '../types/User';

export const getUser = async () => {
  const token = getTokenFromLocalStorage();
  if (!token) return null;
  const options: OptionsFetch = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };
  const response = await fetch(`${URL_USERS}`, options);
  if (response.status !== 200) return null;
  const user: User = await response.json();
  return user;
};

export const updateUser = async (updateData: UserUpdate) => {
  const token = getTokenFromLocalStorage();
  if (!token) return null;
  const options: OptionsFetch = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(updateData),
  };
  const response = await fetch(`${URL_USERS}`, options);
  const user: User = await response.json();
  return user;
};
