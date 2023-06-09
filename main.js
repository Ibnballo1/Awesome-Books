const bookContainer = document.getElementById('bookshelf');
const ul = document.createElement('ul');
const form = document.getElementById('form');
const titleInput = document.getElementById('book-title');
const authorInput = document.getElementById('book-author');
let books = [
  { title: 'Book 1', author: 'Abdullah' },
  { title: 'Book 2', author: 'Faatimah' },
  { title: 'Book 3', author: 'Raslaan' },
];

// Function to create list of books
const createListOfBook = () => {
  books.forEach((book) => {
    const { title, author } = book;
    const titleList = document.createElement('li');
    const authorList = document.createElement('li');
    titleList.innerText = title;
    authorList.innerText = author;
    ul.append(titleList, authorList);
  });
}

// Function to add book to collection
const addBook = (event) => {
  event.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;

  books.push({title, author});
  titleInput.value = ''
  authorInput.value = ''
  ul.innerText = ''
  createListOfBook()
}
createListOfBook();

form.addEventListener('submit', addBook)
bookContainer.appendChild(ul);
