"use strict";

const user = {
  name: "Vasilii",

  getThis: function () {
    return this;
  },
  getName() {
    return this.name;
  },
};

// присвоили newThis функцию
const newThis = user.getThis;

// объявили функцию в глобальном контексте
function getName() {
  return this.name;
}

// Добавили новое свойство объекту
user.getAnotherName = getName;

// console.log(newThis());
// console.log(user.getAnotherName());
// console.log(getName());

const getThis = () => console.log(this === undefined);

console.log(getThis());

const person = {
  getThis: () => this,

  name: "Urii",

  getFullName(age) {

    return `Name: ${this.name} age: ${age}`;
  },
};

const getFullName = person.getFullName

console.log(getFullName.apply(person,[20])) //Name: Urii age: 20
console.log(getFullName.apply(person,[29])) //Name: Urii age: 29
