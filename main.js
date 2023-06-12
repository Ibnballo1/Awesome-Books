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
const displayBook = () => {
  if (books.length == 0) {
    const emptMsg = document.createElement('li');
    emptMsg.innerText = 'There is no book added. Use the form below to add book(s).'
    ul.appendChild(emptMsg)
  } else {
    books.forEach((book, index) => {
      const { title, author } = book;
      const titleList = document.createElement('li');
      const authorList = document.createElement('li');
      const listRemoveBtn = document.createElement('li');
      const listLine = document.createElement('li');
      const removeBtn = document.createElement('button')
      const line = document.createElement('hr');
      listRemoveBtn.append(removeBtn);
      listLine.append(line);
      removeBtn.innerHTML = 'Remove'
      titleList.innerText = title;
      authorList.innerText = author;
      ul.append(titleList, authorList, listRemoveBtn, listLine);
      removeBook(removeBtn, index);
    });
  }
  storeData()
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
  displayBook()
}

// function to remove Book
const removeBook = (removeBtn, index)=> {
  removeBtn.addEventListener('click', ()=> {
    books=books.filter((book, i)=> i !== index);
    ul.innerHTML = '';
    displayBook();
  })
}

const storeData = ()=> {
  const data = JSON.stringify(books);
  // console.log(data);
  localStorage.setItem('books', data);
}

const getData = ()=> {
  const restoreData = localStorage.getItem('books')
  const parseData = JSON.parse(restoreData);
  books = parseData;
  displayBook();
}

getData();

bookContainer.appendChild(ul);
form.addEventListener('submit', addBook);
