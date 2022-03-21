const addBtn = document.getElementById('add-btn');
const bookListUi = document.querySelector('.book-list-ui');

const arrayBooks = [];

const removeBookHandler = () => {

};

// Create a render function
const renderBook = () => {
    const listUi = document.createElement('ul');
    listUi.setAttribute('class', 'list-ui');
    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('class', 'remove-btn');
    removeBtn.textContent = 'Remove';

    // check length add remove class visible

    
   
        
        for (let i=arrayBooks.length; i<=arrayBooks.length;) {
            for(const key in arrayBooks[i]) {
                const bookListElement = document.createElement('li');
                bookListElement.textContent = arrayBooks[i][key];      
                listUi.appendChild(bookListElement);
            }  
            i = arrayBooks.length;
        }

        listUi.appendChild(removeBtn); 
        bookListUi.appendChild(listUi);   

    
};

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
    renderBook();
}

addBtn.addEventListener('click', addBookHandler);
// removeBtn.addEventListener('click', removeBookHandler);