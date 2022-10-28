// Basics of making an Array

let shoppingList = ["cereal", "tortillas", "ice"];

let lotto = [45, 34, 78, 12, 45];

let myCollection = [12, "dog", true, null, NaN];

let food = ["chips", "tuna", "coffee"];

// accessing data out of arrays

// lotto[0] would give me 45
// lotto.length would give me 5
// lotto[lotto.length-3] would give me 78
// lotto[2]

//array.includes (True or False)
if (lotto.includes(78)) {
	console.log("That includes my number");
}
// array.indexOf (would return position or -1)
// lotto.indexOf(12); would return 3

// Unlike strings arrays are mutable. you can change or add things to them
shoppingList[2] = "ice packs";
shoppingList[3] = "meat";
// must know length to be specific
// or you could do this

// IN THE CONSOLE
// push - adds values to end of array
// pop - removes values from the end of an array
// unshift - adds values to start of an array
// shift - removes values from start of an array
myCollection.push("poo");
myCollection.pop(0);
// now 'poo' is gone
myCollection.unshift("pee");
myCollection.shift("pee");
// can choose array position or value specifically

// concat();

console.log(shoppingList.concat(food));
// shopping list is first then food
let badList = shoppingList.concat(food, lotto);

// array.reverse reverses array

// array.join joins array into a STRING (can specify separator (-),(&) etc)

// array.slice(choose index)
let firstThreeLotto = lotto.slice(0, 3);
// or
console.log(lotto.slice(-3));

// you can make a copy of an array by
let lottoCopy = lotto.slice();

// array.splice(position, items to delete, what you want to add);

// lotto.splice(3, 0, 55); would add 55 after 78 in lotto

// better for if you need to delete multiple items and replace them rather than push/pop

// ARRAYS ARE OBJECTS! therefor const is often used with arrays

const animalPairs = [
	["doe", "buck"],
	["woman", "man"],
	["peahen", "peacock"],
];

// animalPairs[2] returns ['peahen', 'peacock']
// animalPairs[1][0] returns 'woman'

//Array Exercise

const people = ["Greg", "Mary", "Devon", "James"];
