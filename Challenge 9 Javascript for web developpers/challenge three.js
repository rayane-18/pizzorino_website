/*Write a function that takes an array of objects representing books,
with each object containing properties such as title, author, and pages. 
The function should return the average number of pages across all the books.
Use the map() and reduce() array methods in your implementation.*/
function averagePages(books) {
  const pagesArray = books.map((book) => book.pages);
  const sumOfPages = pagesArray.reduce(function (sum, pages) {
    return sum + pages;
  }, 0);
  let average;
  if (books.length > 0) {
    average = sumOfPages / books.length;
  } else {
    average = 0;
  }

  return average;
}
const booksArray = [
  { title: "E", author: "cvbs", pages: 100 },
  { title: "FDSSG", author: "cc", pages: 150 },
  { title: "fdh", author: "vfdhdf", pages: 120 },
];

const av = averagePages(booksArray);
console.log(av);
