export const iconCenterAnimate = (className: string) => {
  const videoPlayerIconCenter = <HTMLElement>(
    document.querySelector('.video-player-icon-center')
  );
  if (!videoPlayerIconCenter) throw new Error("Don't find element timeline");

  videoPlayerIconCenter.classList.add(className);
  videoPlayerIconCenter.style.display = 'block';
  setTimeout(() => {
    videoPlayerIconCenter.style.display = 'none';
    videoPlayerIconCenter.classList.remove(className);
  }, 1000);
};
