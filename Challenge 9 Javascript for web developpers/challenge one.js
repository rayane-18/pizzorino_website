/*Write a function that takes an array of numbers and returns the average of all
the even numbers. Use the filter() and reduce() array methods in your
implementation.*/
function averageofevennumbers(numbers) {
  const evennumbers = numbers.filter((num) => num % 2 === 0);
  const sumofevennumbers = evennumbers.reduce((sum, num) => sum + num, 0);
  const average =
    evennumbers.length > 0 ? sumofevennumbers / evennumbers.length : 0;

  return average;
}
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = averageofevennumbers(numbersArray);
console.log(result);
