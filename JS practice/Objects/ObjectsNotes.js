//  Objects are collections of properties
// Properties are a (Key-Value Pair) Rather than accessing data using an index we use custom keys

// Objects are denoted by {} also known as Object literal

const fitbitData = {
	totalSteps: 308762,
	totalMiles: 211.7,
	avgCalorieBurn: 5766,
	workOutsThisWeek: "5 of 7",
	avgGoodSleep: "2:13",
};

// fitbitData.totalMiles would give us 211.7 (dot notation)
let data = {
	a: 3,
	b: 2,
	c: 6,
};
// commas, are important to separate key/value pairs
const numbers = {
	100: "one hundred",
	16: "sixteen",
	"76 trombones": "great song",
};
// cant use (dot notation) for "76 trombones" must use brackets numbers['76 trombones']

const palette = {
	red: "#eb4d4b",
	yellow: "#f9ca24",
	blue: "#30336b",
};

// can use dot notation for this object
//

const userReviews = {};

userReviews["queenbee49"] = 4.9;
userReviews.meninblack3 = 3.4;
userReviews.meninblack3++;

// can update/add to an object like this

const game = {
	player: {
		username: "gus",
		playing: "X",
	},
	player3: {
		username: "bob",
		playing: "0",
	},
	board: [
		["X", null, "0"],
		["X", null, "0"],
		["X", null, "0"],
	],
};
// array within an object allows flexibility

// objects like arrays are reference types

const palette2 = palette;
palette2.green = "#ebf876";

// palette2 and palette reference the same data

// checking for equality
let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let nums2 = nums;
// these two arrays have DIFFERENT REFERENCE NUMBERS

nums === mystery; //False

nums === nums2; //True
// these have the same reference number
