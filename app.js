const addBtn = document.getElementById('add-btn');
const bookListUi = document.querySelector('.book-list-ui');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');

let arrayBooks = [];

class Book {
    // Creat book boject
    constructor() { 
        if (localStorage.getItem('BookList') !== null) {
            this.bookObject = JSON.parse(localStorage.getItem('BookList'));
        } else {
            this.bookObject = [];
        }
    };

    addBook(title, author) {
        this.bookObject.push({title: title, author:author})
        localStorage.setItem('BookList', JSON.stringify(this.bookObject));
    }

    removeBook() {

    }
}



// Create a render function
const renderBook = () => {
  // Create the book list
  arrayBooks = JSON.parse(localStorage.getItem('BookList'));
  if (arrayBooks.length === 0) {
    bookListUi.classList.remove('visible');
    return;
  }
  bookListUi.classList.add('visible');

  bookListUi.innerHTML = '';

  arrayBooks.forEach((book, index) => {
    const listUi = document.createElement('ul');
    listUi.setAttribute('class', `list-ui ${index}`);

    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('class', `remove-btn r-btn${index}`);
    removeBtn.setAttribute('onclick', `removeBook(${index})`);
    removeBtn.textContent = 'Remove';
    /* eslint-disable */
    for (const key in book) {
      const bookListElement = document.createElement('li');
      bookListElement.textContent = book[key];
      listUi.appendChild(bookListElement);
    }

    listUi.appendChild(removeBtn);
    bookListUi.appendChild(listUi);
  });
};

function setLocalStorage() {
  localStorage.setItem('BookList', JSON.stringify(arrayBooks));
}

const removeBook = (removeBtnIndex) => {
  const removeBtn = document.querySelector(`.r-btn${removeBtnIndex}`);
  arrayBooks.splice(removeBtnIndex, 1);
  removeBtn.parentElement.remove();
  renderBook();
  setLocalStorage();
};

function getLocalStorage() {
  if (JSON.parse(localStorage.getItem('BookList')) !== null) {
    arrayBooks = JSON.parse(localStorage.getItem('BookList'));
    renderBook();
  }
}

const addBookHandler = () => {
    if (bookTitle.value.trim() === '' || bookAuthor.value.trim() === '') {
         return;
    }

    const book = new Book();
    book.addBook(bookTitle.value, bookAuthor.value);

    renderBook();

}



addBtn.addEventListener('click', addBookHandler);
document.addEventListener('DOMContentLoaded', getLocalStorage);