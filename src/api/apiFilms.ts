import { URL_FILMS } from '../types/constants';
import { Film } from '../types/Film';

export const getFilms = async (page?: number, limit?: number) => {
  const searchParam =
    page !== undefined && limit !== undefined
      ? `?page=${page}&limit=${limit}`
      : '';
  const response = await fetch(`${URL_FILMS}${searchParam}`);
  const films: Film[] = await response.json();
  
  const countFilms =
    Number(response.headers.get('X-Total-Count')) || films.length;
  return { films, countFilms };
};

export const getFilm = async (id: number) => {
  const response = await fetch(`${URL_FILMS}/${id}`);
  const film: Film = await response.json();
  return film;
};

export const getFilmsById = async (ids: number[]): Promise<Film[]> => {
  const responsePromises: Promise<Response>[] = [];
  ids.forEach(id => {
    const responsePromise = fetch(`${URL_FILMS}/${id}`);
    responsePromises.push(responsePromise);
  });
  const allResponses = await Promise.all(responsePromises);

  return Promise.all(allResponses.map(responsesResult => responsesResult.json()));
};
