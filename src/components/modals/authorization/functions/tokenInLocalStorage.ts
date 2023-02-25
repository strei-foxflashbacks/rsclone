export const saveTokenInLocalStorage = (token: string): void => {
  localStorage.setItem('token', token); 
};