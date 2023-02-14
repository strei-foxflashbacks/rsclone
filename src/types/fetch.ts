type Method = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
type Headers = {
  'Content-Type': 'application/json';
};

export type OptionsFetch = {
  method: Method;
  body?: string;
  headers?: Headers;
};
