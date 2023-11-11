//Implement a queue data structure in JavaScript using an array.
function createQueue() {
  const items = [];

  function enqueue(element) {
    items.push(element);
  }

  function dequeue() {
    return items.shift();
  }

  function front() {
    return items[0];
  }

  function isEmpty() {
    return items.length === 0;
  }

  function size() {
    return items.length;
  }

  return {
    enqueue,
    dequeue,
    front,
    isEmpty,
    size,
  };
}

const queue = createQueue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.size());
