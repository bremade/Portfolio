/* eslint no-unused-vars: 0 */

function checkMobile() {
  return window.innerWidth <= 1280;
}

function checkCentering() {
  if (checkMobile()) {
    return 'center';
  }
  return 'flex-start';
}

function checkPictureDimension() {
  if (checkMobile()) {
    return '70';
  }
  return '100';
}

const scrollWithOffset = (el, offset) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: 'smooth',
  });
};
