function diceRoll() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}

function throwDice(dice) {
	for (let i = 0; i < dice; i++) {
		diceRoll();
	}
}

// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(password, username) {
	if (password.length < 8) {
		console.log("Needs to be at least 8 characters");
		return false;
	}
	if (password.includes(" ")) {
		console.log("Cannot have spaces");
		return false;
	}
	if (password.includes(username)) {
		console.log("cannot contain username");
		return false;
	}
	return true;
}

// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

let scores = [75, 76, 80, 95, 100];

function avg(arr) {
	let sum = 0;
	for (let num of arr) {
		sum += num;
	}
	return sum / arr.length;
}

// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

let deck = {
	values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
	suits: ["clubs", "spades", "hearts", "diamonds"],
};

function getCard() {
	let x = Math.floor(Math.random() * deck.values.length);
	let y = Math.floor(Math.random() * deck.suits.length);

	let cardVal = deck.values[x];
	let cardSuit = deck.suits[y];

	return {
		value: cardVal,
		suit: cardSuit,
	};
}

// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

const alphabet = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];
function isPangram(pan) {
	for (let letter of alphabet) {
		if (pan.toUpperCase().indexOf(letter) === -1) {
			return false;
		}
	}
	return true;
}

// difference of two numbers

function difference(x, y) {
	let diff = x - y;
	return diff;
}

// product of two numbers

function product(x, y) {
	let prod = x * y;
	return prod;
}

// this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

let keew = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

// function week(n) {
// 	let str = "test";
// 	str = str + " adding";
// 	console.log("string" + str);
// 	return keew[n - 1];
// }

function vowelFrequency(str) {
	const vowels = ["a", "e", "i", "o", "u"];
	let vowelCounter = {};

	//looping through each letter in string
	for (i = 0; i < str.length; i++) {
		//is the current letter a vowel?
		if (vowels.includes(str[i])) {
			//Is this vowel already in the vowel counter?
			if (vowelCounter[str[i]]) {
				// increase the count for this vowel by 1
				vowelCounter[str[i]] += 1;
				// otherwise create the vowel and count in vowelcounter
			} else {
				vowelCounter[str[i]] = 1;
			}
		}
	}

	let retnString = "";
	for (let key of Object.keys(vowelCounter)) {
		retnString = retnString + (key + vowelCounter[key]);
	}
	return retnString;
}

let anarray = [-3, -5, -5, -12];

function max(arr) {
	let maximum = arr[0];
	for (let num of arr) {
		if (num > maximum) {
			maximum = num;
		}
	}
	console.log(maximum);
}
let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function nonums(str) {
	let newStr = "";
	for (let char of str) {
		if (!nums.includes(char)) {
			newStr = newStr + char;
		}
	}
	return newStr;
}

function evens(arr) {
	let newArr = [];
	for (let num of arr) {
		if (num % 2 === 0) {
			newArr.push(num);
		}
	}

	return newArr;
}
let er = [7, 6, 5, 4, 3, 2, 1];

function reverse(arr) {
	for (let i = 0; i < arr.length / 2; i++) {
		let temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
		console.log(arr);
	}
	return arr;
}
