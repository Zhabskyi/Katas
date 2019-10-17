// In this exercise, we will be given an array of 2 or more numbers. 
// We will then have to find the two largest numbers in that array,
// and sum them together.


let sumLargestNumbers = function(data) {
	let firstNumber = -Infinity;
	let secondNumber = -Infinity;
  data.forEach( el => {
		if ( el > firstNumber) {
			secondNumber = firstNumber;
			firstNumber = el;
		} else if (el < firstNumber && el > secondNumber) {
			secondNumber = el;
		}
	});
	return firstNumber + secondNumber;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
