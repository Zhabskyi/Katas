// Create a function named urlDecode that will receive a URL encoded string, and
// return the a JavaScript object that represents that data.

const urlDecode = (text) => {
	let Obj = {};
	const pairs = text.split('&');
	pairs.forEach(el => {
		const item = el.split('=');
		const value = item[1].replace(/%20/g, ' ');
		Obj[item[0]] = value;
	});
	return Obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);