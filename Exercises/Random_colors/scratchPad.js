// const h1 = document.querySelector("h1");
const happyLetters = document.querySelectorAll(".letter");

function randomRGB() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);

	return `rgb(${r},${g},${b})`;
}

setInterval(function () {
	for (let letter of happyLetters) {
		letter.style.color = randomRGB();
	}
}, 600);
