/*Write a function that takes an array of strings and returns an object containing
the frequency of each string. For example, if the input is ["hello", "world", "hello"],
the output should be { hello: 2, world: 1 }. Use the reduce() array method in your implementation.*/
function stringFrequency(strings) {
  const frequencyObject = strings.reduce(function (result, current) {
    if (result[current]) {
      result[current] += 1;
    } else {
      result[current] = 1;
    }
    return result;
  }, {});

  return frequencyObject;
}
const stringsArray = ["hello", "world", "hello"];
const r4 = stringFrequency(stringsArray);
console.log(r4);
