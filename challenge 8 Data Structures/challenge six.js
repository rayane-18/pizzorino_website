/*
Given two arrays of numbers, 
write a function that returns a 
new array containing the unique elements from both arrays.
*/
function uniqueElements(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  return Array.from(new Set(combinedArray));
}

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const uniqueArray = uniqueElements(array1, array2);
console.log(uniqueArray);
