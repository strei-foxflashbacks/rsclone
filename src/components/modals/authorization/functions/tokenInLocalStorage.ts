export const saveTokenInLocalStorage = (token: string): void => {
  localStorage.removeItem('token');
  localStorage.setItem('token', token); 
};

export const getTokenFromLocalStorage = (): string | null => localStorage.getItem('token') || null; 