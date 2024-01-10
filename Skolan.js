// Skola

let School = {
  name: "Fantasiskolan",
  students: [],
  teachers: [],
  subjects: [],

  DISPLAYSTUDENTS: function (group = this.students) {
    return group.map((person) => person.name);
  },
  DISPLAYTEACHERS: function (group = this.teachers) {
    return group.map((person) => person.name);
  },
};

function Subject(name) {
  // Här i leker jag lite med mapping.
  // Letar igenom skolkatalogens studenter och kikar om deras ämnen är equal med detta ämne.
  this.name = name;
  School.subjects.push(this);

  this.ENLISTED = function (enlisted = []) {
    School.students.map((student) => student.subjects.includes(this) && enlisted.push(student.name));
    return enlisted;
  };
}

function Student(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.subjects = [];

  School.students.push(this);

  this.ADDSUBJECT = function (...subjects) {
    subjects.map((subj) => this.subjects.push(subj));
  };
  this.REMOVESUBJECT = function (...subject) {
    for (sub of subject) {
      for (i in this.subjects) {
        this.subjects[i] == sub && this.subjects.splice(i, 1);
      }
    }
  };
  this.RELEGATE = function () {
    for (i in School.students) {
      School.students[i] == this && School.students.splice(i, 1);
    }
  };
  this.DISPLAYSUBJECTS = function () {
    return this.subjects.map((subjects) => subjects.name);
  };
}

function Teacher(name) {
  this.name = name;
  this.subjects = [];

  School.teachers.push(this);

  this.ADDSUBJECT = function (...subject) {
    for (each of subject) {
      this.subjects.push(each);
    }
  };
  this.REMOVESUBJECT = function (...subject) {
    for (sub of subject) {
      for (i in this.subjects) {
        this.subjects[i] == sub ? this.subjects.splice(i, 1) : null;
      }
    }
  };
  this.FIRE = function () {
    for (i in School.teachers) {
      School.teachers[i] == this ? School.teachers.splice(i, 1) : null;
    }
  };
  this.DISPLAYSUBJECTS = function () {
    return this.subjects.map((subjects) => subjects.name);
  };
}

let Math = new Subject("Math");
let English = new Subject("English");
let History = new Subject("History");

let Daniel = new Student("Daniel Westergren", 37, "Male");
let Adam = new Student("Adam Adamsson", 24, "Male");
let Eva = new Student("Eva Evadotter", 56, "Female");

let Niklas = new Teacher("Niklas Fähnrich");
let Thomas = new Teacher("Thomas Månsson");

Daniel.ADDSUBJECT(Math, English, History);
Daniel.REMOVESUBJECT(History);
Adam.ADDSUBJECT(Math, History);
Eva.ADDSUBJECT(Math, History);
Eva.REMOVESUBJECT(History, English);

Niklas.ADDSUBJECT(Math);
Thomas.ADDSUBJECT(History, Math);

console.log(History.ENLISTED());
console.log(Math.ENLISTED());
console.log(English.ENLISTED());

console.log(School.DISPLAYSTUDENTS());
console.log(School.DISPLAYTEACHERS());
