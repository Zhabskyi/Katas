// Create a function named numberOfVowels that will receive a string 
// and return the number of vowels in that string.

let numberOfVowels = function(data) {
	let count = 0;
	vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const c of data) {
    vowels.forEach( el => {
			el === c ? count += 1 : null
		});
	}
	return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
