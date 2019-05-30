console.log("Print reverse array.")

function reverseArray(a) {
	var empty = [];
	for(var i = a.length - 1; i >= 0; i--) {
		empty.push(a[i]);
	}
	return empty
}

console.log(reverseArray([1,2,3,4,5]));


console.log("Check if array is uniform.");

function isUniform(a) {
	var v = a[0]
	var answer;
	a.forEach(function(i) {
		if (i !== v) {
			answer = false;
		} else {
			answer = true;
		}
	});
	return answer;

}

console.log(isUniform(["b","b","b"]));


console.log("Return sum of array");

function sumArray(a) {
	var sum = 0;
	a.forEach(function(i) {
		sum = sum + i;
	});
	return sum;
}

console.log(sumArray([-5,100]));


console.log("Return max number in array");

// function max(a) {
// 	var max;
// 	for (var i = 0; i < a.length - 1; i++) {
// 		if (a[i] > a[i + 1]) {
// 			max = a[i];
// 		} else {
// 			max = a[i + 1];
// 		}
// 	}
// 	return max;
// }

function max(a) {
	var max = 0;
	for (var i = 0; i < a.length; i++) {
		if (a[i] > max) {
			max = a[i];
		}
	}
	return max;
}

console.log(max([10,3,10,4]));




