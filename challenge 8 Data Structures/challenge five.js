/*Write a function that takes a string as input and returns a new string
 with all the vowels removed.
*/
function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

const inputString = "Hello, World!";
const stringWithoutVowels = removeVowels(inputString);
console.log(stringWithoutVowels);
