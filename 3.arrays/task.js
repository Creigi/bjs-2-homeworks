function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length ? arr1.every((elem, index) => elem === arr2[index]) : false;
}


function getUsersNamesInAgeRange(users, gender) {
	return avgAge = users.filter(people => people.gender === gender).
	map(oneGender => oneGender.age).
	reduce((acc, item, index, arrOfAges) => {
		acc += item;
		if (index === arrOfAges.length - 1) {
			return acc / arrOfAges.length;
		}
		return acc;
	}, 0);
}