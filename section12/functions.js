function isEven(x) {
	if (x % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

// console.log(isEven(4));
// console.log(isEven(21));
// console.log(isEven(68));
// console.log(isEven(333));

function factorial(x) {
	var res = 1;
	while(x > 0) {
		res = res * x;
		x--;
	}
	return res;
}

// console.log(factorial(5));
// console.log(factorial(2));
// console.log(factorial(10));
// console.log(factorial(0));


function kebabToSnake(str) {
	str = str.replace(/-/g, "_");
	return str;
}

console.log(kebabToSnake("dogs-are-awesome"));