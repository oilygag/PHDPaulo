const playButton = document.getElementById('playButton');
const soundEffect = new Audio('https://www.myinstants.com/media/sounds/we-are-the-champions.mp3');
const fireworksLeft = document.getElementById('fireworksLeft');
const fireworksRight = document.getElementById('fireworksRight');

function createFirework() {
  console.log('createFirework');
  const firework = document.createElement('div');
  firework.classList.add('firework');
  const particle = document.createElement('span');
  particle.classList.add('particle');
  firework.appendChild(particle);
  return firework;
}

function launchFirework(position) {
  console.log('launchFirework');
  const firework = createFirework();
  firework.style.left = `${position}%`;
  if (position === 0) {
    fireworksLeft.appendChild(firework);
  } else {
    fireworksRight.appendChild(firework);
  }
  setTimeout(() => {
    firework.remove();
  }, 3000);
}

playButton.addEventListener('click', () => {
  console.log('button clicked');
  soundEffect.play();
  launchFirework(0);
  launchFirework(100);
});
