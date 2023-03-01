import createElement from '../../../../helpers/createElement';
import { Film } from '../../../../types/Film';
import { AddToPlayListValue, PlaylistItem } from '../../../../types/types';
import handleAddingToPlaylist from '../../filmPage/functions/handleAddingToPlaylist';
import getSerialEpisode from '../../filmPage/serialEpisode';
import getCountEpisodes from './getCountEpisodes';
import scrollSlider from './scrollSlider';
import getValueFromLS from '../../../../components/localStorage/getValueFromLS';

export const deletePlaylistElementFromLS = (id: string) => {
  const favorites: PlaylistItem[] = JSON.parse(getValueFromLS('playlist', '[]'));
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].id === id) {
      favorites.splice(i, 1);
    }
  }
  console.log('film');
  localStorage.setItem('playlist', JSON.stringify(favorites));
};

const renderSerialInPlaylist = (ser: Film) => {
  const serial = createElement('div', { class: 'serial' });
  const titleContainer = createElement('div', {
    class: 'serial__title-container',
  });
  const title = createElement(
    'a',
    { class: 'serial__title', href: '#' },
    `${ser.name}`,
  );
  const addingButton = createElement('button', { class: 'button adding-button' }, AddToPlayListValue.remove);
  addingButton.onclick = () => {
    deletePlaylistElementFromLS(`${ser.id}`);
    if (!serial.parentElement) {
      throw new Error();
    }
    serial.parentElement.removeChild(serial);
  };
  titleContainer.append(title, addingButton);

  const seriesContainer = <HTMLElement>createElement('div', { class: 'serial__series' });
  const countEpisodes = getCountEpisodes(ser);
  seriesContainer.style.setProperty('--count-slide', `${countEpisodes}`);

  ser.serial!.seasons.forEach((season, seasonNumber) => {
    season.episodes.forEach((episode, episodeNumber) => {
      seriesContainer.append(
        getSerialEpisode(ser.id, episode, seasonNumber + 1, episodeNumber + 1),
      );
    });
  });

  const serialCarouselArrows = createElement('div', {
    class: 'serial__carousel-arrows',
  });
  const serialCarouselArrowPrev = createElement('button', {
    class: 'serial__carousel-arrows-prev',
  });
  const serialCarouselArrowNext = createElement('button', {
    class: 'serial__carousel-arrows-next',
  });
  serialCarouselArrows.append(serialCarouselArrowPrev, serialCarouselArrowNext);

  const serialCarousel = createElement('div', { class: 'serial__carousel' });
  serialCarousel.append(seriesContainer);

  serial.append(titleContainer, serialCarousel, serialCarouselArrows);

  addingButton.addEventListener('click', handleAddingToPlaylist);

  let currentPos = 0;
  serialCarouselArrowNext.addEventListener('click', () => {
    if (currentPos > -340 * (countEpisodes - 2)) currentPos -= 340;
    scrollSlider(seriesContainer, currentPos);
  });
  serialCarouselArrowPrev.addEventListener('click', () => {
    if (currentPos < 0) currentPos += 340;
    scrollSlider(seriesContainer, currentPos);
  });

  return serial;
};

export default renderSerialInPlaylist;
