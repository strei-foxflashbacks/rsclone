const hideBody = () => {
  const body = document.querySelector('body');
  if (!body) {
    throw new Error('body is not found');
  }
  body.style.overflow = 'hidden';
};

export default hideBody;