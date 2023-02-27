export const updateTimeLine = () => {
  const video = <HTMLVideoElement>document.querySelector('.video');
  const timeLine = <HTMLElement>document.querySelector('.timeline');
  const positionPercent = `${(video.currentTime / video.duration) * 100}%`;
  timeLine!.style.setProperty('--timeline-position', positionPercent);
};
