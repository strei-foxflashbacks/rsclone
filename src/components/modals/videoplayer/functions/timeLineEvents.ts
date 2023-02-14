export const clickTimeline = (e: MouseEvent) => {
  const timeLine = document.querySelector('.timeline');
  if (!timeLine) throw new Error("Don't find element timeline");
  const video = <HTMLVideoElement>document.querySelector('.video');
  if (!video) throw new Error("Don't find element video");

  const xClickMouse = e.x - timeLine.getBoundingClientRect().x;
  const widthTimeLine = parseInt(window.getComputedStyle(timeLine).width);
  const percent = xClickMouse / widthTimeLine;
  video.currentTime = video.duration * percent;
};

export const mouseMoveTimeLine = (e: MouseEvent, previews: string[]) => {
  const timeLine = <HTMLVideoElement>document.querySelector('.timeline');
  if (!timeLine) throw new Error("Don't find element timeline");
  const previewImage = <HTMLVideoElement>(
    document.querySelector('.timeline-preview-img')
  );
  if (!previewImage) throw new Error("Don't find element previewElement");

  const target = <HTMLElement>e.target;
  if (!target.classList.contains('timeline')) {
    timeLine.style.setProperty('--timeline-preview', '0%');
    previewImage.style.display = 'none';
  } else {
    const xClickMouse = e.x - timeLine.getBoundingClientRect().x;
    const widthTimeLine = parseInt(window.getComputedStyle(timeLine).width);
    const percent = (xClickMouse / widthTimeLine) * 100;
    timeLine.style.setProperty('--timeline-preview', `${percent}%`);
    const imgNumber = Math.trunc(percent / (100 / previews.length));
    previewImage.src = previews[imgNumber];
    previewImage.style.display = 'block';
  }
};
