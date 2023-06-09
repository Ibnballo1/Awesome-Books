const bookContainer = document.getElementById('bookshelf');
const ul = document.createElement('ul');
const form = document.getElementById('form');
const addBtn = document.getElementById('add-btn');
const titleInput = document.getElementById('book-title');
const authorInput = document.getElementById('book-author');
const books = [
  { title: 'Book 1', author: 'Abdullah' },
  { title: 'Book 2', author: 'Faatimah' },
  { title: 'Book 3', author: 'Raslaan' },
];

books.forEach((book) => {
  const { title, author } = book;
  const titleList = document.createElement('li');
  const authorList = document.createElement('li');
  titleList.innerText = title;
  authorList.innerText = author;
  ul.append(titleList, authorList);
});

// Function to add book to collection
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  const title = titleInput.value;
  const author = authorInput.value;

  console.log('This is the event:', e);
  console.log('Title:', title);
  console.log('Author:', author);

  // Additional actions after logging the event and values

  // Clear input fields
  titleInput.value = '';
  authorInput.value = '';
});

bookContainer.appendChild(ul);
