import closeModal from '../components/modals/functions/closeModal';
import handleLogInButton from '../templates/header/functions/handleLogInButton';
import { URL_REGISTER } from '../types/constants';
import { OptionsFetch } from '../types/fetch';

export const getRegistrationPage = async () => {
  
};

export const registerUser = async (dataParams: RegisterUser) => {
  console.log('dataParams', JSON.stringify(dataParams));
  const options: OptionsFetch = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataParams),
  };
  const response = await fetch(`${URL_REGISTER}`, options);
  if (response.status === 200) {
    closeModal();
    handleLogInButton();
  }
  console.log(response);

};

type RegisterUser = {
  name: string,
  email: string,
  password: string
};