import createElement from '../../../../helpers/createElement';
import { clickTimeline, mouseMoveTimeLine } from './timeLineEvents';

const getTimelineElement = (previews?: string[]) => {
  const timeLineTime = createElement('timeline-time', {
    class: 'timeline-time',
  });
  const timeLine = createElement('div', { class: 'timeline' });
  const timeLineIndicator = createElement('div', {
    class: 'timeline-indicator',
  });

  const previewImage = <HTMLImageElement>createElement('img', {
    class: 'timeline-preview-img',
    alt: 'preview image',
  });
  timeLine.append(timeLineIndicator, previewImage);

  timeLine.addEventListener('click', clickTimeline);

  if (previews) {
    document.addEventListener('mousemove', (e: MouseEvent) => {
      mouseMoveTimeLine(e, previews);
    });
  }

  const time = createElement('div', { class: 'time' });
  timeLineTime.append(timeLine, time);
  return timeLineTime;
};

export default getTimelineElement;