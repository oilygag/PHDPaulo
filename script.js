const playButton = document.getElementById('playButton');
const soundEffect = document.createElement('audio');
soundEffect.src = 'https://www.myinstants.com/media/sounds/we-are-the-champions.mp3';

playButton.addEventListener('click', () => {
	soundEffect.play();
});