function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if ("marks" in this) {
		this.marks = [...this.marks, ...marks];
	}
}

Student.prototype.getAverage = function() {
	if ("marks" in this) {
		arrMarks = [...this.marks];
		return avgMarks = arrMarks.reduce((acc, mark, index, arrMarks) => {
			acc += mark;
			if (index === arrMarks.length - 1) {
				return acc / arrMarks.length;
			} else {
				return acc;
			}
		}, 0);
	} else {
		return avgMarks = 0;
	}
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}