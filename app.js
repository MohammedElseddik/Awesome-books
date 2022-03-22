const addBtn = document.getElementById('add-btn');
const bookListUi = document.querySelector('.book-list-ui');
// const removeBtns = []; 

const arrayBooks = [];


// Create a render function
const renderBook = (filter = '') => {
    
    console.log(filter);
    const filterBooks = filter ? arrayBooks.filter(book => !book.id.includes(filter)) : arrayBooks;
    console.log(filterBooks);
    // Create the book list
    if (arrayBooks.length === 0) {
        bookListUi.classList.remove('visible');
        return;
    } else {
        bookListUi.classList.add('visible');
    }
    
    bookListUi.innerHTML = '';
    
    filterBooks.forEach((book) => {

        const listUi = document.createElement('ul');
        listUi.setAttribute('class', 'list-ui');

        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('class', 'remove-btn');
        removeBtn.textContent = 'Remove';

        for (const key in book) {
            if (key === 'id') {
                listUi.setAttribute('id', `${book[key]}`);
                removeBtn.setAttribute('data-remove-id', `${book[key]}`);
            } else {
                const bookListElement = document.createElement('li');
                bookListElement.textContent = book[key]; 
                listUi.appendChild(bookListElement);
            }
        };
        
        listUi.appendChild(removeBtn);
        bookListUi.appendChild(listUi);
        console.log(listUi);
        console.log(removeBtn);
    });
    
    
    // for (const key in arrayBooks[arrayBooks.length - 1]) {
        //     const bookListElement = document.createElement('li');
        //     // if (key === 'id') {
            //     //     listUi.setAttribute('id', `${arrayBooks[arrayBooks.length - 1].id}`);
            //     //     removeBtn.setAttribute('data-remove-id', `${arrayBooks[arrayBooks.length - 1].id}`);
            //     // } else {
                //         bookListElement.textContent = arrayBooks[arrayBooks.length - 1][key];      
                //         listUi.appendChild(bookListElement);
                //     //}
                // }
                // listUi.appendChild(removeBtn); 
                // bookListUi.appendChild(listUi);
                //removeBookHandler(removeBtns);   
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
                    bookAuthor,
                    id: Math.random().toString()
                };
                
                arrayBooks.push(objectBook);
                console.log(arrayBooks);
                renderBook();
                removeBookHandler();
            }

            

const removeBookHandler = () => {
    const removeBtns = [...document.querySelectorAll('.remove-btn')];
   console.log(removeBtns);
   removeBtns.forEach(removeBtn => {
       //console.log(removeBtn);
       console.log(3);
       removeBtn.addEventListener('click', (event)=>{
            const bookId = event.target.dataset.removeId;
            console.log(1);
            console.log(bookId);
            renderBook(bookId); 
        })
    });
}

addBtn.addEventListener('click', addBookHandler);

// const removeBookHandler = () => {
//     console.log(removeBtns);
//     removeBtns.forEach(removeBtn => {
//         console.log(removeBtn);
//         removeBtn.addEventListener('click', ()=>{
//             console.log(1);
//             //console.log(removeBtn.parentElement.id)
            
//         })
//     });
// };