export const toggleFavorite = (e: Event) => {
  const target = <HTMLElement>e.target;
  target.classList.toggle('liked');
};
