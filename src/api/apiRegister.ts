import { URL_REGISTER } from '../types/constants';
import { OptionsFetch } from '../types/fetch';
import { RegisterUser } from '../types/User';

export const registerUser = async (dataParams: RegisterUser): Promise<Response> => {
  const options: OptionsFetch = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataParams),
  };
  const response = await fetch(`${URL_REGISTER}`, options);
  return response;
};
