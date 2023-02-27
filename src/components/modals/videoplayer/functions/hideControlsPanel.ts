let timeoutHidden: string | number | NodeJS.Timeout | undefined = undefined;
export const hideControlsPanel = (
  video: HTMLVideoElement,
  videoPlayer: HTMLElement,
) => {
  const close = document.querySelector('.close-video');
  const filmName = document.querySelector('.film-name');
  const controls = document.querySelector('.controls');
  if (!videoPlayer.childElementCount) timeoutHidden = undefined;
  if (timeoutHidden) {
    clearTimeout(timeoutHidden);
    videoPlayer.classList.remove('hide-interface');
    close!.classList.remove('hide-interface');
    filmName!.classList.remove('hide-interface');
    controls!.classList.remove('hide-interface');
  }
  timeoutHidden = setTimeout(() => {
    if (!video.paused) {
      videoPlayer.classList.add('hide-interface');
      close!.classList.add('hide-interface');
      filmName!.classList.add('hide-interface');
      controls!.classList.add('hide-interface');
    }
  }, 5000);
};
