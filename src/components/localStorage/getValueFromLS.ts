const getValueFromLS = (name: string, defaultValue = ''): string => {
  if (!localStorage.getItem(`${name}`)) {
    localStorage.setItem(`${name}`, defaultValue);
  }

  return localStorage.getItem(`${name}`)!;
};
export default getValueFromLS;
