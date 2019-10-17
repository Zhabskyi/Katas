// Create a function named calculateChange that takes in a total 
// amount of a bill and the total cash given to pay that bill. 
// Return a new object that describes the total amount of change 
// for the cashier to give back. Omit any types of change that you 
// shouldn't give back, i.e. if you don't give back a twenty dollar 
// bill, don't include it in the results.

let calculateChange = function(total, cash) {
	let money = {
		'twentyDollar' : 0,
		'tenDollar' : 0,
		'fiveDollar' : 0,
		'twoDollar' : 0,
		'oneDollar' : 0,
		'quarter' : 0,
		'dime' : 0,
		'nickel' : 0,
		'penny' : 0
	}

	let  change = cash - total;
	
	let mathFloor = (n) => {
		return Math.floor(change/n)
	}

	do {
	if (mathFloor(2000) !== 0) {
		money.twentyDollar += mathFloor(2000);
		change -=  mathFloor(2000)*2000;
	} else if (mathFloor(1000) !== 0) {
		money.tenDollar += mathFloor(1000);
		change -=  mathFloor(1000)*1000;
	} else if (mathFloor(500) !== 0) {
		money.fiveDollar += mathFloor(500);
		change -=  mathFloor(500)*500;
	} else if (mathFloor(200) !== 0) {
		money.twoDollar += mathFloor(200);
		change -=  mathFloor(200)*200;
	} else if (mathFloor(100) !== 0) {
		money.oneDollar += mathFloor(100);
		change -=  mathFloor(100)*100;
	} else if (mathFloor(25) !== 0) {
		money.quarter += mathFloor(25);
		change -=  mathFloor(25)*25;
	} else if (mathFloor(10) !== 0) {
		money.dime += mathFloor(10);
		change -=  mathFloor(10)*10;
	} else if (mathFloor(5) !== 0) {
		money.nickel += mathFloor(5);
		change -=  mathFloor(5)*5;
	} else {
		money.penny += change;
		change = 0;
	} } while (change !== 0);

	Object.keys(money).forEach( key => !money[key] && delete money[key]);

	return money;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
