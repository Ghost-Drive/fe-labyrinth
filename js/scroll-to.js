const portals = document.querySelectorAll('.portal-anchors span');
const goToPortalOne = document.getElementById('portal-one');
const goToPortalTwo = document.getElementById('portal-two');
const goToPortalThree = document.getElementById('portal-three');
const goToPortalFour = document.getElementById('portal-four');
const goToPortalFive = document.getElementById('portal-five');
const goToPortalSix = document.getElementById('portal-six');
const goToPortalSeven = document.getElementById('portal-seven');
console.log(goToPortalTwo)
let autoScrollActive = false;
function autoScroll(numberOfPortal) {
  if (autoScrollActive) {
    portals[numberOfPortal - 1].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
    if (
      document.documentElement.scrollTop <
      document.documentElement.scrollHeight - window.innerHeight
    ) {
      requestAnimationFrame(autoScroll);
    } else {
      autoScrollActive = false;
    }
  }
}

goToPortalOne.addEventListener('click', () => {
  autoScrollActive = true;
  autoScroll(1);
});
goToPortalTwo.addEventListener('click', () => {
  autoScrollActive = true;
  autoScroll(2);
});
goToPortalThree.addEventListener('click', () => {
  autoScrollActive = true;
  autoScroll(3);
});
goToPortalFour.addEventListener('click', () => {
  autoScrollActive = true;
  autoScroll(4);
});
goToPortalFive.addEventListener('click', () => {
  autoScrollActive = true;
  autoScroll(5);
});
goToPortalSix.addEventListener('click', () => {
  autoScrollActive = true;
  autoScroll(6);
});
goToPortalSeven.addEventListener('click', () => {
  autoScrollActive = true;
  autoScroll(7);
});
window.addEventListener('scroll', () => {
  if (autoScrollActive) {
    autoScrollActive = false;
  }
});
