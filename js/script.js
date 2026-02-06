'use strict';

function Student(firstName, lastName, birthYear) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthYear = birthYear

    this.attendance = new Array(10).fill(null);
    this.marks = new Array(10).fill(null);

    Student.prototype.getAge = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    Student.prototype.present = function () {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        }
    }

    Student.prototype.absent = function () {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        }
    }

    Student.prototype.mark = function (value) {
        if (value < 0 || value > 10) return;

        const index = this.marks.indexOf(null);
        if (index !== -1) {
            this.marks[index] = value;
        }
    }

    Student.prototype.getAverageMark = function () {
        const validMarks = this.marks.filter(m => m !== null);
        if (validMarks.length === 0) return 0;

        return validMarks.reduce((a, b) => a + b, 0) / validMarks.length;
    };

    Student.prototype.getAverageAttendance = function () {
        const validAttendance = this.attendance.filter(a => a !== null);
        if (validAttendance.length === 0) return 0;

        const presentCount = validAttendance.filter(a => a === true).length;
        return presentCount / validAttendance.length;
    };

    Student.prototype.summary = function () {
        const avgMark = this.getAverageMark();
        const avgAttendance = this.getAverageAttendance();

        if (avgMark > 9 && avgAttendance > 0.9) {
            return "Wow, u did great!";
        }
        if (avgMark > 6 || avgAttendance > 0.6) {
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
    std2.mark(7);
}
std2.absent();
std2.absent();

console.log(std1, std2);
console.log(std1.getAge(), std2.summary());