/*Write a function that takes an array of objects representing people,
with each object containing properties such as name, age, and city.
The function should return an object containing the count of people by city. 
For example, if the input is [{ name: "Alice", age: 30, city: "New York" },
{ name: "Bob", age: 40, city: "Chicago" }, { name: "Charlie", age: 50, city: "New York" }],
the output should be { "New York": 2, "Chicago": 1 }. Use the reduce() array method in your
 implementation.*/
function countPeopleByCity(people) {
  const countByCity = people.reduce(function (result, person) {
    const city = person.city;

    if (result[city]) {
      result[city] += 1;
    } else {
      result[city] = 1;
    }

    return result;
  }, {});

  return countByCity;
}
const peopleArray = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 40, city: "Chicago" },
  { name: "Charlie", age: 50, city: "New York" },
];

const r5 = countPeopleByCity(peopleArray);
console.log(r5);
