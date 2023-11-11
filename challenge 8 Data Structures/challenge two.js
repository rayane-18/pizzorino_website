/*
Create an object representing a person with properties such as name, age, and email.
 Write a function that takes an array of these objects and returns a new array containing 
 only the people who are over 30 years old.
 */
var people = [
  { name: "amine", age: 31, email: "amine@gmail.com" },
  { name: "hamid", age: 35, email: "hamid@gmail.com" },
  { name: "rayane", age: 23, email: "rayane@gmail.com" },
];

function filterPeopleOver30(people) {
  var over30 = [];
  for (var i = 0; i < people.length; i++) {
    if (people[i].age > 30) {
      over30.push(people[i]);
    }
  }
  return over30;
}

console.log(filterPeopleOver30(people));
