let prompt = require("prompt-sync")();

const number = Math.floor(Math.random() * 100);
let answer;
let attemts = 0;
let checkNumber;

do {

	answer = Number(prompt("Guess a number: "));

	do {
		if ( answer === checkNumber) {
			console.log('Already Guessed!');
			answer = Number(prompt("Guess a number: "));	
		} 
	} while (answer === checkNumber);

	checkNumber = answer;

	if (answer === number) {
		attemts++;
		console.log(`You got it! You took ${attemts} attempts!`)
	} else if ( answer < number) {
		attemts++;
		console.log('Too Low!');
	} else if ( answer > number) {
		attemts++;
		console.log('Too High!');
	} else if (isNaN(answer)) {
		console.log('Not a number! Try again!')
	}

} while (answer !== number);