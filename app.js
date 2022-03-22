const addBtn = document.getElementById('add-btn');
const bookListUi = document.querySelector('.book-list-ui');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');

class Book {
  // Creat book boject
  constructor() {
    if (localStorage.getItem('BookList') !== null) {
      this.bookObject = JSON.parse(localStorage.getItem('BookList'));
    } else {
      this.bookObject = [];
    }
  }

  addBook(title, author) {
    this.bookObject.push({ title, author });
    localStorage.setItem('BookList', JSON.stringify(this.bookObject));
  }

  // Create a render function
  renderBook() {
    // Create the book list
    if (this.bookObject.length === 0) {
      bookListUi.classList.remove('visible');
      return;
    }
    bookListUi.classList.add('visible');

    bookListUi.innerHTML = '';

    this.bookObject.forEach((bookItem, index) => {
      const listUi = document.createElement('ul');
      listUi.setAttribute('class', `list-ui ${index}`);

      const removeBtn = document.createElement('button');
      removeBtn.setAttribute('class', `remove-btn r-btn${index}`);
      removeBtn.setAttribute('onclick', `remove(${index})`);
      removeBtn.textContent = 'Remove';
      /* eslint-disable */
            for (const key in bookItem) {
                const bookListElement = document.createElement('li');
                bookListElement.textContent = bookItem[key];
                listUi.appendChild(bookListElement);
            }
            listUi.appendChild(removeBtn);
            bookListUi.appendChild(listUi);
        });
    };
    
    removeBook(removeBtnIndex) {
        const removeBtn = document.querySelector(`.r-btn${removeBtnIndex}`);
        removeBtn.parentElement.remove();
        this.bookObject.splice(removeBtnIndex, 1);
        this.renderBook();
        setLocalStorage();
    }

}

const book = new Book();

function setLocalStorage() {
    localStorage.setItem('BookList', JSON.stringify(book.bookObject));
}

const remove = (index) => {
    book.removeBook(index);
};

function getLocalStorage() {
  if (JSON.parse(localStorage.getItem('BookList')) !== null) {
    book.bookObject = JSON.parse(localStorage.getItem('BookList'));
    book.renderBook();
  }
}

const addBookHandler = () => {
    if (bookTitle.value.trim() === '' || bookAuthor.value.trim() === '') {
         return;
    }
    book.addBook(bookTitle.value, bookAuthor.value);
    book.renderBook();
}

addBtn.addEventListener('click', addBookHandler);
document.addEventListener('DOMContentLoaded', getLocalStorage);