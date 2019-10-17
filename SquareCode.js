// Create a function named squareCode that will receive a message, 
// and return the secret square code version of the message.

const squareCode = function (message) {

	let arr = message.replace(/ /g, '').split('');
	const rowNumber = Math.ceil(Math.sqrt(arr.length));

	let groupLettersArray = [];
	let result = [];

	for (let i = 0; i < rowNumber; i++) {
		groupLettersArray[i] = [];
		k = i;
		for (let j = 0; j < rowNumber; j++) {
			if(arr[k]) {
				groupLettersArray[i][j] = arr[k];
				k = k + rowNumber;
			}
		}
	}

	groupLettersArray.forEach((el, i) => result[i] = el.join(''));

	return result.join(' ');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));