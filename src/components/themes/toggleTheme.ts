const toggleTheme = (event: Event) => {
  const target = event.target as HTMLElement;
  const button = target.closest('#theme');

  if (!button) {
    throw new Error('target.closest(button) is not found');
  }
  const circle = button.firstElementChild;
  if (!circle) {
    throw new Error('circle is not found');
  }
  circle.classList.toggle('dark');
};
export default toggleTheme;
