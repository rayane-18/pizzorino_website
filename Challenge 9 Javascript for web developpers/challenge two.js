/*Write a function that takes an array of words and returns the
 longest word. Use the reduce() array method in your implementation.*/
function findLongestWord(words) {
  const longestWord = words.reduce(function (longest, current) {
    if (current.length > longest.length) {
      return current;
    } else {
      return longest;
    }
  }, "");

  return longestWord;
}
const wordsArray = ["apple", "banana", "kiwi", "grape", "watermelon"];
const res = findLongestWord(wordsArray);
console.log(res);
