const addBtn = document.getElementById('add-btn');


const arrayBooks = [];
let objectBook = {}; 

function addBook(title, author) {
    objectBook.title = title
    objectBook.author = author;
    arrayBooks.push(objectBook);
    console.log(arrayBooks); 
}

addBtn.addEventListener('click', (event) => {
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    event.preventDefault()
    addBook(bookTitle, bookAuthor)
})