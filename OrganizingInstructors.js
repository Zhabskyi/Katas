// Create a function named organizeInstructors that will r
// eceive an array of instructor objects, and will return 
// a new object that has the following format:

const organizeInstructors = function(instructors) {
	const unique = [...new Set(instructors.map(item => item.course))];
	let results = unique.reduce((o, key) => ({ ...o, [key]: []}), {});
	instructors.forEach(el => {
		for (const key in results) {
			key === el.course ? results[key].push(el.name) : null;	
		}
	});
	return results;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));