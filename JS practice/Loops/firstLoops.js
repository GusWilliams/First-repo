// write for loops
// write while loops
// AVOID INFINITE LOOPS
// iterate over arrays and objects

// LAYOUT

// for (
//   [initialExpression];
//   [Condition];
//   [incrementExpression];
// )

// for (let i = 1; i <= 5; i++) {
// 	console.log("hello", i);
// }

// for (let num = 1; num <= 10; num++) {
// 	console.log(`${num}x${num}=${num * num}`);
// }

// for (let n = 200; n >= 0; n -= 25) {
// 	console.log("Lost 25 points! Total =", `${n}`);
// }

// INFINITE LOOPS

// use < or > to prevent UNMEETABLE CONDITIONS!

const examScores = [98, 23, 23, 43, 65, 76];

for (let i = 0; i < examScores.length; i++) {
	console.log(i, examScores[i]);
}

// Note i > examScores

const word = "staples";
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
	reversedWord += word[i];
}
console.log(reversedWord);

// Loops Exercise
// Your assignment is to write the correct JavaScript for the following problems.

// Numbers up to ten
// Using a for loop console.log all the numbers from 0 to 10

// Using a while loop console.log all the numbers from 0 to 10

// Even numbers to 20
// Using a for loop console.log all the even numbers from 0 to 20

// Odd numbers to 20
// Using a while loop console.log all the odd numbers from 0 to 20

// Back to zero
// Using a for loop console.log all the numbers from 10 to 0.

for (let i = 0; i <= 10; i++) {
	console.log(i);
}

let num = 0;
while (num <= 10) {
	console.log("while " + num);
	num++;
}

for (let j = 0; j <= 20; j++) {
	if (j % 2 === 0) {
		console.log(j);
	}
}

let w = 0;
while (w <= 20) {
	if (w % 2 !== 0) {
		console.log("while 20 " + w);
	}
	w++;
}

for (let i = 10; i >= 0; i--) {
	console.log(i);
}
