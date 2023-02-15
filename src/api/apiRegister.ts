import { URL_REGISTER } from '../types/constants';
import { OptionsFetch } from '../types/fetch';

export const getRegistrationPage = async () => {
  
};

export const registerUser = async (dataParams: RegisterUser) => {
  const options: OptionsFetch = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataParams),
  };
  const response = await fetch(`${URL_REGISTER}`, options);
  console.log(response);
};

type RegisterUser = {
  name: string,
  email: string,
  password: string
};