// Create a function named blocksAway that will receive a
// n array of directions, and return an object that 
// calculates how far north and east those directions 
// will take someone.

const whichWay = (direction, coordinates , number) => {
	switch (direction) {
		case 0:
				coordinates.north = coordinates.north + number;
			break;
		case 360:
				coordinates.north = coordinates.north + number;
			break;
		case 90:
				coordinates.east = coordinates.east + number;
			break;
		case 180:
				coordinates.north = coordinates.north - number;
			break;
		case 270:
				coordinates.east = coordinates.east - number;
			break;
		default:
			break;
	}
	return coordinates;
}

const blocksAway = function(directions) {
	let direction = 0;
	let coordinates = {
		'east': 0,
		'north': 0
	}

	
	for (let i = 0; i < directions.length; i+=2) {
		if (i === 0) {
			switch (directions[i]) {
				case 'right':
						coordinates.east = coordinates.east + directions[i+1];
						direction = direction + 90;
					break;
				case 'left':
						coordinates.north = coordinates.north + directions[i+1];
					break;
				default:
					break;
			}
		} else {
			if ( directions[i] === 'right') {
				if (direction === 360) { 
					direction = 0;
				}
				direction = direction + 90;
				coordinates = whichWay(direction , coordinates, directions[i+1]);
			}
			if ( directions[i] === 'left') {
				if (direction === 0) { 
					direction = 360;
				}
				direction = direction - 90;
				coordinates = whichWay(direction , coordinates, directions[i+1]);
			}
			}
		}
	return coordinates;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));