//Implement a stack data structure in JavaScript using an array.
function createStack() {
  const items = [];

  function push(element) {
    items.push(element);
  }

  function pop() {
    return items.pop();
  }

  function peek() {
    return items[items.length - 1];
  }

  function isEmpty() {
    return items.length === 0;
  }

  function size() {
    return items.length;
  }

  return {
    push,
    pop,
    peek,
    isEmpty,
    size,
  };
}

const stack = createStack();
stack.push(10);
stack.push(20);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
