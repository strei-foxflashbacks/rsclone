export const updateTimeLine = (video: HTMLVideoElement) => {
  const timeLine = <HTMLElement>document.querySelector('.timeline');

  const positionPercent = `${(video.currentTime / video.duration) * 100}%`;
  timeLine!.style.setProperty('--timeline-position', positionPercent);
};
