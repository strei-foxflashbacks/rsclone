const scrollSlider = (slider: HTMLElement, pos: number) => {
  if (!slider.style.transform) slider.style.transform = `translateX(${pos}px)`;
  slider.style.transform = `translateX(${pos}px)`;
};

export default scrollSlider;
