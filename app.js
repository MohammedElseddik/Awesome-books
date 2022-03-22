const addBtn = document.getElementById('add-btn');
const bookListUi = document.querySelector('.book-list-ui');
let arrayBooks = [];

// Create a render function
const renderBook = () => {
  // Create the book list
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

// Create the Books array
const addBookHandler = () => {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;

  if (bookTitle.trim() === '' || bookAuthor.trim() === '') {
    return;
  }

  const objectBook = {
    bookTitle,
    bookAuthor,
  };

  arrayBooks.push(objectBook);
  setLocalStorage();
  renderBook();
};

/* eslint-disable */

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

addBtn.addEventListener('click', addBookHandler);
document.addEventListener('DOMContentLoaded', getLocalStorage);