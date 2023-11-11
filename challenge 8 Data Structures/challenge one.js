//Write a function that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(numbers) {
  var evenNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
console.log(filterEvenNumbers([1, 2, 3, 6, 45, 8]));
