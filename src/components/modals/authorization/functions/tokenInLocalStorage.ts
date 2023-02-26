export const deleteTokenInLocalStorage = () => localStorage.removeItem('token');

export const saveTokenInLocalStorage = (token: string): void => {
  deleteTokenInLocalStorage();
  localStorage.setItem('token', token); 
};

export const getTokenFromLocalStorage = (): string | null => localStorage.getItem('token') || null;
