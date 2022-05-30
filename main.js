let bookShelf = document.querySelector('#bookshelf');
let titleInput = document.getElementById('book-title');
let authorInput = document.getElementById('book-author');
let addBtn = document.getElementById('add-btn');
let displayText = document.createElement('div');
let counter = 0;

// create a template for collections of book
class CollectionOfBook {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
};

// Text to dispaly when No book added yet
displayText.setAttribute(`id`, `displayText`);
displayText.innerText = `There's currently no book in your shelf, add one below`;
bookShelf.appendChild(displayText);

addBtn.addEventListener('click', () => {
    // Create new element to hold the book title and book author
    if ((titleInput.value.length !== 0) && (authorInput.value.length !== 0)) {
        let bookTitle = document.createElement('p');
        let bookAuthor = document.createElement('p');
        let removeDisplayText = document.getElementById('displayText');
        let bookData = [];

        removeDisplayText.style.display = 'none';
        bookTitle.innerText = titleInput.value;
        bookAuthor.innerText = authorInput.value;
        let book = new CollectionOfBook(bookTitle, bookAuthor);
        bookData.push(book);

        // create a loop
        bookData.forEach((eachBook)=> {
            let bookPlacement = document.createElement('div');
            let formRem = document.createElement('form');
            let label = document.createElement('label');
            let input = document.createElement('input');
            let horizontalLine = document.createElement('hr')

            formRem.setAttribute(`action`, `#`);
            label.setAttribute(`for`, `removeBook`);
            input.setAttribute(`type`, `button`);
            input.setAttribute(`id`, `removeBook`);
            input.setAttribute(`class`, `removeBook-${counter}`);
            input.classList.add('removeAll');
            input.setAttribute(`value`, `Remove`);
            formRem.appendChild(label);
            formRem.appendChild(input);
            bookPlacement.setAttribute(`class`, `removeBook-${counter}`)
            bookPlacement.classList.add(`book-${counter}`);
            bookShelf.appendChild(bookPlacement);
            bookPlacement.appendChild(eachBook.title);
            bookPlacement.appendChild(eachBook.author);
            bookPlacement.appendChild(formRem);
            bookPlacement.appendChild(horizontalLine);

            // Remove function
            let bookToRemove = document.getElementsByClassName(`removeBook-${counter}`);
            for (let i = 0; i < bookToRemove.length; i++) {
                bookToRemove[i].addEventListener('click', ()=> {
                    bookToRemove[i].remove();
                    if (bookShelf.children.length < 2) {
                        displayText.innerText = `You have deleted all the Books. You can add again.`
                        removeDisplayText.style.display = 'block';
                    }
                });
            }
        });
        counter++;
    }
});

// Local Storage
class LocalStorage {
    constructor(titles, authors) {
        this.titleStorage = titles;
        this.authorStorage = authors;
    }
};

let localStores = new LocalStorage(titleInput, authorInput);
// Check if datas are in your local storage
function getDatas() {
    if (localStorage.getItem('localStores') !== null) {
        const formField = JSON.parse(localStorage.getItem('localStores'));
        titleInput.value = formField[titleInput.name];
        authorInput.value = formField[authorInput.name];
    };
}

getDatas();

// Set local storage
function setInputs(formDetails) {
    localStores[formDetails.name] = formDetails.value;
    localStorage.setItem('localStores', JSON.stringify(localStores));
}

titleInput.addEventListener('input', () => {
    setInputs(titleInput);
  });
  
authorInput.addEventListener('input', () => {
    setInputs(authorInput);
  });
