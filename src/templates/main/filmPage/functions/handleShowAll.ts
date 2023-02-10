const handleShowAll = (event: Event) => {
  const target = event.target as HTMLElement;
  const season = target.parentElement;
  if (!season) {
    throw new Error('season is not found');
  }
  if (season.classList.contains('collapsed')) {
    season.classList.remove('collapsed');
    season.classList.add('showed');
    target.innerText = 'Скрыть';
  } else {
    season.classList.add('collapsed');
    season.classList.remove('showed');
    target.innerText = 'Показать всё';
  }
};
export default handleShowAll;
