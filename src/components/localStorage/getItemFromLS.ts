const getItemFromLS = (name: string): string[] => {
  if (!localStorage.getItem(`${name}`)) {
    localStorage.setItem(`${name}`, '[]');
  }
  const item = localStorage.getItem(`${name}`);

  return JSON.parse(item!);
};
export default getItemFromLS;
