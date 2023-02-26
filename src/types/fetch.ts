type Method = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
type HeadersContent = {
  'Content-Type': 'application/json';
};
type HeadersAuthorization = {
  'Authorization': string;
};

export type OptionsFetch = {
  method: Method;
  body?: string;
  headers?: HeadersContent | HeadersAuthorization;
};
