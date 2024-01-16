// Skola

let School = {
  name: "Lexicon",
  students: [],
  teachers: [],
  subjects: [],

  DISPLAYSTUDENTS: function (group = this.students) {
    return group.map((person) => person.name);
  },
  DISPLAYTEACHERS: function (group = this.teachers) {
    return group.map((person) => person.name);
  },
  DISPLAYSUBJECTS: function (subjects = this.subjects) {
    return subjects.map((subject) => subject.name);
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
        this.subjects[i] == sub && this.subjects.splice(i, 1);
      }
    }
  };
  this.FIRE = function () {
    for (i in School.teachers) {
      School.teachers[i] == this && School.teachers.splice(i, 1);
    }
  };
  this.DISPLAYSUBJECTS = function () {
    return this.subjects.map((subjects) => subjects.name);
  };
}

let Math = new Subject("Math"); // Lägger till kurser
let English = new Subject("English");
let History = new Subject("History");

let Daniel = new Student("Daniel Westergren", 37, "Male"); // Lägger till studenter
let Adam = new Student("Adam Adamsson", 24, "Male");
let Eva = new Student("Eva Evadotter", 56, "Female");

let Niklas = new Teacher("Niklas Fähnrich"); // Lägger till lärare
let Thomas = new Teacher("Thomas Månsson");

Daniel.ADDSUBJECT(Math, English);
Adam.ADDSUBJECT(History);
Eva.ADDSUBJECT(English, Math, History); // Lägger till kurser för elever. Valfritt antal

Daniel.REMOVESUBJECT(English, Math); // Raderar kurser för elever. Valfritt antal
Adam.RELEGATE(); // Stäng av elev från skolan

Niklas.ADDSUBJECT(Math, English); // Addera lärarkurs, valfritt antal
Thomas.ADDSUBJECT(History);

Niklas.FIRE(); // Avskeda lärare

console.log(School);
console.log(School.DISPLAYSTUDENTS());
console.log(School.DISPLAYTEACHERS());
console.log(School.DISPLAYSUBJECTS());

console.log(`Eva studerar: ${Eva.DISPLAYSUBJECTS()}`);
x = 1;
y = x | null;

console.log(typeof y);
