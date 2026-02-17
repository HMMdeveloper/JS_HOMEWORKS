'use strict';
class Student {
    firstName = null;
    lastName = null;
    birthYear = null;
    attendance = null;
    marks = null;

    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.attendance = new Array(25).fill(null);
        this.marks = [];
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        }
    }

    absent() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        }
    }

    addMark(value) {
        if (value < 0 || value > 100) return;
        this.marks.push(value);
    }

    getAverageMark() {
        if (this.marks.length === 0) return 0;

        const sum = this.marks.reduce((a, b) => a + b, 0);
        return sum / this.marks.length;
    }

    getAverageAttendance() {
        const validAttendance = this.attendance.filter(a => a !== null);
        if (validAttendance.length === 0) return 0;

        const presentCount = validAttendance.filter(a => a === true).length;
        return presentCount / validAttendance.length;
    };

    summary() {
        const avgMark = this.getAverageMark();
        const avgAttendance = this.getAverageAttendance();

        if (avgMark > 90 && avgAttendance > 0.9) {
            return "Wow, u did great!";
        }
        if (avgMark > 60 || avgAttendance > 0.6) {
            return "Fine, but can be better.";
        } else {
            return "You've been a bad boy/girl!";
        }
    };
}

const std1 = new Student("Pete", "Palahin", 2002);
const std2 = new Student("Yana", "Osypenko", 2003);

for (let i = 0; i < 5; i++) {
    std2.present();
    std2.addMark(75);
}
std2.absent();
std2.absent();

console.log(std1, std2);
console.log(std1.getAge(), std2.summary());