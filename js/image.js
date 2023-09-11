const firstImage = document.querySelector('.first');
const secondImage = document.querySelector('.second');

function moveImages() {
  const sLeft = window.scrollX || window.pageXOffset;

  const firstImageLeft = ((13777 - 9777) / (13777 - window.innerWidth)) * sLeft;
  const secondImageLeft =
    ((13777 - 11777) / (13777 - window.innerWidth)) * sLeft;

  firstImage.style.left = firstImageLeft + 'px';
  secondImage.style.left = secondImageLeft + 'px';
}

moveImages();

window.addEventListener('scroll', moveImages);
