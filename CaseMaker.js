// Create a function named camelCase that will convert a string 
// to camel case, and return the result.

let camelCase = function(input) {
	return input.split(' ')
		.map((word, i) => {
			if ( i !== 0) {
				return word.charAt(0).toUpperCase() + word.slice(1)
			} else {
				return word
			}})
    .join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));