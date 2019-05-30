var nums = [1,2,3];

function myForEach(arr, f) {
	for (var i = 0; i < arr.length; i++) {
		f(arr[i]);
	}
}

myForEach(nums, console.log);