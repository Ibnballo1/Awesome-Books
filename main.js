const bookContainer = document.getElementById('bookshelf');
const ul = document.createElement('ul');
const form = document.getElementById('form');
const addBtn = document.getElementById('add-btn');
const titleInput = document.getElementById('book-title').value;
const authorInput = document.getElementById('book-author').value;
const books = [
  {title: 'Book 1', author: 'Abdullah'},
  {title: 'Book 2', author: 'Faatimah'},
  {title: 'Book 3', author: 'Raslaan'},
]

books.forEach((book)=> {
  const { title, author } = book
  const titleList = document.createElement('li');
  const authorList = document.createElement('li');
  titleList.innerText = title
  authorList.innerText = author
  ul.append(titleList, authorList)
})

// Function to add book to collection

bookContainer.appendChild(ul)
