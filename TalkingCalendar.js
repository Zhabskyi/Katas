// Create a function named talkingCalendar that takes in a 
// date string with the format YYYY/MM/DD, and returns 
// a new human readable date that looks like December 2nd, 2017.

let talkingCalendar = function(date) {

	const months = {
		'01' : 'January',
		'02' : 'February',
		'03' : 'March',
		'04' : 'April',
		'05' : 'May',
		'06' : 'June',
		'07' : 'July',
		'08' : 'August',
		'09' : 'September',
		'10' : 'October',
		'11' : 'November',
		'12' : 'December'
	}

	const dateArray = date.split('/');
	const month = dateArray[1];
	let result = [];

	for (const key in months) {
		if (key === month) {
			 result.push(months[key]);
		}
	}

	dateArray[2] === '01' ? result.push('1st,') :
	dateArray[2] === '02' ? result.push('2nd,') :
	dateArray[2] === '03' ? result.push('3nd,') :
	result.push(`${dateArray[2]}th,`);

	result = [...result, dateArray[0]].join(' ');

	return result;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));