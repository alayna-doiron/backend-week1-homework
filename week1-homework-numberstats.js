
// This is the function that I had before getting to the object review section of last week's class.
// function numberStats(array) {
// 	var min = Math.min(...array);
// 	var max = Math.max(...array);
// 	var sum = array.reduce((a,b) => a + b, 0);
// 	var length = array.length;
// 	var avg = sum / length;
// 	return [min, max, avg];
// }
// var myArray = [2, 3, 6, 9, 10, 23];
// var allStats = console.log(`Min: ${numberStats(myArray)[0]} Max: ${numberStats(myArray)[1]} Average: ${numberStats(myArray)[2]} Full Array ${myArray}`);

//This is what I had after reviewing objects.
function numberStats(array) {
	var stats = {}
	stats.min = Math.min(...array);
	stats.max =  Math.max(...array);
	var sum = array.reduce((a,b) => a + b, 0);
	var length = array.length;
	stats.avg = sum / length;
	stats.nums = array;

	return stats;
}

var myArray = [2, 3, 6, 9, 10, 23];
console.log(numberStats(myArray));
