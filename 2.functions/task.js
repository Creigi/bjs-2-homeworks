function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let sum = arr.reduce(function(a, b) {
		return a + b;
	});
	let avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = arr.reduce(function(a, b) {
		return a + b;
	}, 0);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let diff = 0;
	if (arr.length != 0) {
		diff = Math.max(...arr) - Math.min(...arr);
	}
	return diff;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let diff = 0;
	if (arr.length != 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		}
	}
	diff = sumEvenElement - sumOddElement;
	return diff;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let avg = 0;
	if (arr.length != 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
				countEvenElement += 1;
			}
			avg = sumEvenElement / countEvenElement;
		}
	}
	return avg;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (i = 0; i < arrOfArr.length; i++) {
		let tmp = func(...arrOfArr[i]);
		if (maxWorkerResult < tmp) {
			maxWorkerResult = tmp;
		}
	}
	return maxWorkerResult;
}