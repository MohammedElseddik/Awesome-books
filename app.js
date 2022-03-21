const addBtn = document.getElementById('add-btn');

const arrayBooks = [];


// Create the Books array
const addBookHandler = () => {
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    
    if (bookTitle.trim() === '' || bookAuthor.trim() === '') {
        return;
    }

    let objectBook = {
        bookTitle,
        bookAuthor
    };

    arrayBooks.push(objectBook);
    console.log(arrayBooks);
}

addBtn.addEventListener('click', addBookHandler)