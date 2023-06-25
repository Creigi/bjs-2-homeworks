class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark >=2 && mark <= 5) {        
            if (this.marks.hasOwnProperty(subject)) {
                this.marks[subject].push(mark);
            } else {
                this.marks[subject] = [mark];
            }
        }
    }

    getAverageBySubject(subject) {
        if (this.marks.hasOwnProperty(subject)) {
            return this.marks[subject].reduce((acc, mark, index, arrMarks) => {
                acc += mark;
                if (index == arrMarks.length - 1) {
                    return acc / arrMarks.length;
                } else {
                    return acc;
                }
            }, 0);
        } else return 0;
    }

    getAverage() {
        let avgArr = [];
        for (let sub of Object.keys(this.marks)) {
            avgArr.push(this.getAverageBySubject(sub));
        }
        return avgArr.reduce((acc, mark, index, avgArr) => {
            acc += mark;
            if (index == avgArr.length - 1) {
                return acc / avgArr.length;
            } else {
                return acc;
            }
        }, 0);
    }
}