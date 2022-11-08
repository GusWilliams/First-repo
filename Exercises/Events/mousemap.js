// const page = document.querySelector("document");

document.addEventListener("mousemove", function (event) {
	document.body.style.backgroundColor = `rgb(${
		(event.clientX / window.innerWidth) * 255
	},${(event.clientY / window.innerHeight) * 255},
		0)`;
});
