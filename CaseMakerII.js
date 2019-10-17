// Create a function named makeCase that will receive an input
// string and one or more casing options. Return a new string
// that is formatted based on casing options:

const makeCase = function (input, yourCase) {
	let result;
	let scopeInput = input;

	const toCamelCase = input => {
		return input
			.split(" ")
			.map((word, i) => {
				if (i !== 0) {
					return word.charAt(0).toUpperCase() + word.slice(1);
				} else {
					return word;
				}
			})
			.join("");
	};

	const toPascalCase = input =>
		input
		.split(" ")
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join("");

	const toSnakeCase = input => input.split(" ").join("_");

	const toKebabCase = input => input.split(" ").join("-");

	const toTitleCase = input =>
		input
		.split(" ")
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	const toVovelCase = input =>
		input.replace(/[aeiou]/gi, input => input.toUpperCase());

	const toConsonantCase = input =>
		input.replace(/[bcdfghjklmnpqrstvwxyz]/gi, input =>
			input.toUpperCase()
		);

	const switchStatement = yourCase => {
		switch (yourCase) {
			case "camel":
				result = toCamelCase(scopeInput);
				break;
			case "pascal":
				result = toPascalCase(scopeInput);
				break;
			case "snake":
				result = toSnakeCase(scopeInput);
				break;
			case "kebab":
				result = toKebabCase(scopeInput);
				break;
			case "title":
				result = toTitleCase(scopeInput);
				break;
			case "vowel":
				result = toVovelCase(scopeInput);
				break;
			case "consonant":
				result = toConsonantCase(scopeInput);
				break;
			case "upper":
				result = scopeInput.toUpperCase();
				break;
			case "lower":
				result = scopeInput.toLowerCase();
				break;
			default:
				null;
		}
	};

	const processingOrder = arr => {

		arr.forEach(el => {
			if (el === "camel" || el === "pascal" || el === "snake" || el === "kebab" || el === "title") {
				switchStatement(el);
			}

		});
		arr.forEach(el => {
			if (el === 'vowel' || el === 'consonant') {
				if (!result) {
					switchStatement(el);
				} else {
					scopeInput = result;
					switchStatement(el);
				}
			}
		});
		arr.forEach(el => {
			if (el === 'upper' || el === 'lower') {
				if (!result) {
					switchStatement(el);
				} else {
					scopeInput = result;
					switchStatement(el);
				}
			}
		});
		return result;
	};

	if (Array.isArray(yourCase)) {
		processingOrder(yourCase);
	} else {
		switchStatement(yourCase);
	}

	return result;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
const products = [
	{
		id: 'asdas',
		price: 20,
		title: 'Hello'
	},
	{
		id: 'asdas2',
		price: 20,
		title: 'Hello'
	},
];

const productsMap = {
	'123': {
		id: '123',
		price: 20,
		title: 'Hello'
	},
}


const productsMap = products.reduce((accumulator, item) => {
	accumulator[item.id] = item;
	return accumulator;
}, {})