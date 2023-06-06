const bookContainer = document.getElementById('bookshelf');
const books = [
  {title: 'Book 1', author: 'Abdullah'},
  {title: 'Book 2', author: 'Faatimah'},
  {title: 'Book 3', author: 'Raslaan'},
]

const ul = document.createElement('ul')

books.forEach((book)=> {
  const { title, author } = book
  const titleList = document.createElement('li');
  const authorList = document.createElement('li');
  titleList.innerText = title
  authorList.innerText = author
  ul.append(titleList, authorList)
})

bookContainer.appendChild(ul)
