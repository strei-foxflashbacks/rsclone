import createElement from '../../../../helpers/createElement';
import { AddToPlayListValue, Film } from '../../../../types/types';
import getAddOrRemoveButton from '../../filmPage/addOrRemoveButton';
import handleAddingToPlaylist from '../../filmPage/functions/handleAddingToPlaylist';
import getSerialEpisode from '../../filmPage/serialEpisode';
import scrollSlider from './scrollSlider';

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
  const addingButton = getAddOrRemoveButton(
    './assets/minus.svg',
    AddToPlayListValue.remove,
  );
  addingButton.classList.add('button');
  titleContainer.append(title, addingButton);

  const seriesContainer = createElement('div', { class: 'serial__series' });

  ser.serial!.season.forEach((season) => {
    ser.serial!.episode.forEach((ep) => {
      seriesContainer.append(
        getSerialEpisode(
          ep,
          `${ser.name} ${season}`,
          Math.random() <= 0.5 ? true : false,
        ),
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
    if (currentPos > -340 * 6) currentPos -= 340;
    scrollSlider(seriesContainer, currentPos);
  });
  serialCarouselArrowPrev.addEventListener('click', () => {
    if (currentPos < 0) currentPos += 340;
    scrollSlider(seriesContainer, currentPos);
  });

  return serial;
};

export default renderSerialInPlaylist;
