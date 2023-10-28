let message = "There is no war in Ba Sing Se";
function countwords(message) {
  let words = message.split(" ");
  return words.length;
}
console.log(countwords(message));
