export const blurAllBtn = () => {
  const allBtn = <NodeListOf<HTMLButtonElement>>(
    document.querySelectorAll('.controls-btn')
  );
  allBtn.forEach((btn) => btn.blur());
};
