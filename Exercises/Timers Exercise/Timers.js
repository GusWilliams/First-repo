function countDown(num) {
	let subTract = setInterval(function () {
		num--;
		if (num > 0) {
			console.log(num);
		} else {
			console.log("DONE!");
			clearInterval(subTract);
		}
	}, 1000);
}

function randomGame() {
	let count = 0;
	let randomNum = setInterval(function () {
		count++;
		if (Math.random() > 0.75) {
			console.log("Tries = " + count);
			clearInterval(randomNum);
		}
	}, 1000);
	// console.log("Tries = " + count);
	// return count;
}
