import { URL_PERSONS } from '../types/constants';
import { Person } from '../types/Person';

export const getPersons = async (): Promise<Person[]> => {
  const response = await fetch(`${URL_PERSONS}`);
  const persons: Person[] = await response.json();
  return persons;
};

export const getPerson = async (id: number): Promise<Person> => {
  const response = await fetch(`${URL_PERSONS}/${id}`);
  const person: Person = await response.json();
  return person;
};
