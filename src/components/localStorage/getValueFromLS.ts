const getValueFromLS = (name: string): string => {
  if (!localStorage.getItem(`${name}`)) {
    localStorage.setItem(`${name}`, '');
  }
  const item = localStorage.getItem(`${name}`)!;

  return item;
};
export default getValueFromLS;
