// Create a function named multiplicationTable that receives a number 
// maxValue as input and creates a square multiplication table 
// where maxValue is the largest value in the table.

const multiplicationTable = function(maxValue) {
	let data = [];
	let result = '';
  for (let i = 0; i < maxValue; i++) {
		data[i] = [];
		for (let j = 0; j < maxValue; j++) {
			data[i][j] = ((j+1) * (i+1));
		}
		result += data[i].join(' ') + '\n';
		
	}
	return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));