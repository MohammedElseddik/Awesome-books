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

    removeBook(removeBtnIndex) {


        console.log(removeBtnIndex)
        const removeBtn = document.querySelector(`.r-btn${removeBtnIndex}`);
        console.log(removeBtn);
        removeBtn.parentElement.remove();
        console.log('hello');
        this.bookObject.splice(removeBtnIndex, 1);
        console.log(this.bookObject.length)
        renderBook();
        setLocalStorage();
    }
}

const book = new Book();


// Create a render function
const renderBook = () => {
  // Create the book list
  //arrayBooks = JSON.parse(localStorage.getItem('BookList'));
  if (book.bookObject.length === 0) {
    bookListUi.classList.remove('visible');
    return;
  }
  bookListUi.classList.add('visible');

  bookListUi.innerHTML = '';

  book.bookObject.forEach((book, index) => {
    const listUi = document.createElement('ul');
    listUi.setAttribute('class', `list-ui ${index}`);

    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('class', `remove-btn r-btn${index}`);
    removeBtn.setAttribute('onclick', `remove(${index})`);
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

const remove = (index) => {
    console.log(index);
    book.removeBook(index);
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
    book.addBook(bookTitle.value, bookAuthor.value);
    renderBook();
}



addBtn.addEventListener('click', addBookHandler);
document.addEventListener('DOMContentLoaded', getLocalStorage);