// Conditional examples

let rating = 3;

if (rating === 3) {
  console.log('you are a good coworker');
}

else if (rating === 2) {
  console.log('meets expectations');
}

else if (rating === 1) {
  console.log('needs improvement');
}
else {
  console.log('Invalid rating');
}



let highScore = 1430;
let userScore = 1500

if (userScore >= highScore) {
  console.log(`You have the highest score of ${userScore}!`);
  highScore = userScore
}
else {
  console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`)
}

// And - && example

let password = 'hesewddhole';

if (password.length >= 9 && password.indexOf(' ') === -1) {
  console.log('valid password');
}
else {
  console.log("invalid password")
}

// && Example 2

let num = 1;

if (num >= 1 && num <= 10) {
  console.log('number is between 1 and 10');
}
else {
  console.log('please guess a number between 1 and 10')
}

// The switch statement

let day = 3

if (day === 1) {
  console.log('MONDAY')
}
else if (day === 2) {
  console.log('TUESDAY')
}
else if (day === 3) {
  console.log('WEDNESDAY')
}
else if (day === 4) {
  console.log('THURSDAY')
}
else if (day === 5) {
  console.log('FRIDAY')
}
else if (day === 6) {
  console.log('SATURDAY')
}
else if (day === 7) {
  console.log('SUNDAY')
}
else {
  console.log('invalid day')
}
switch (day) {
}

let status = "offlne"

let color = status === "offline" ? 'red' : 'green';

if (Math.random() > 0.5) {
  console.log('over 0.5');
}
else {
  console.log('under 0.5')
}




