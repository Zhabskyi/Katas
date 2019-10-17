// In this exercise we will be writing an algorithm, 
// to detect if two queens on a chess board can attack 
// each other.

const generateBoard = (whiteQueen, blackQueen) => {
	let row = [];
	for (let i = 0; i < 8; i++) {
		row[i] = [];
		for (let j = 0; j < 8; j++) {
			row[i][j] = 0;
		}
	}
	row[whiteQueen[0]][whiteQueen[1]] = 1;
	row[blackQueen[0]][blackQueen[1]] = 1;

	return row;

}

const findFirstQueen = (generatedBoard) => {
		let spot = [];
		for (let i = 0; i < generatedBoard.length; i++) {
			if (spot.length) {
				break;
			} else {
				for (let j = 0; j < generatedBoard[i].length; j++) {
					if ( generatedBoard[i][j] === 1) {
						spot = [...spot, i, j];
						break;
					}		
				}
			}
		}
	return spot;
}

const rowCheck = (generatedBoard) => {
	let isMove = false;
	let limit = 0;
		generatedBoard.forEach( el => {
			limit = 0;
			el.forEach( el2d => {
				if (el2d === 1) {
					limit++;
					limit === 2 ? isMove = true : null;
				}	
			});
		});
	return isMove;
}

const columnCheck = (generatedBoard) => {
	let isMove = false;
	let column = 0;
		do {
			let limit = 0;
			for (let i = 0; i < generatedBoard.length; i++) {	
				generatedBoard[i][column] === 1 ? limit++ : null;
			}
			limit === 2 ? isMove = true : null;
			column++;
		} while (column <= generatedBoard.length - 1 );
	return isMove;
}

const crossCheck = (generatedBoard) => {
	const spot = findFirstQueen(generatedBoard);
	let row = spot[0];
	let columnLeft = spot[1];
	let columnRight = spot[1];
	let isMove = false;
	while (  row <  generatedBoard.length - 1)  {
		row++;
		columnLeft = columnLeft - 1;
		columnRight = columnRight + 1;
		if (generatedBoard[row][columnLeft] === 1 || generatedBoard[row][columnRight] === 1) {
			isMove = true;
		}
	}

	return isMove;
}

const queenThreat = (generatedBoard) => {
	let result = rowCheck(generatedBoard) || columnCheck(generatedBoard) || crossCheck(generatedBoard);
	return result;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));