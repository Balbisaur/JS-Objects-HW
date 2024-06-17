function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Pages: ${this.pages}`);
    console.log('---------------------------');
};

let library = [];

function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages);
    library.push(newBook);
}

function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

function filterByPages() {
    return library.filter(book => book.pages >= 100);
}

function modifyTitlesAndAuthors() {
    return library.map(book => {
        return {
            title: `Title: ${book.title}`,
            author: `Author: ${book.author}`,
            pages: book.pages
        };
    });
}


addBook('The Hobbit', 'J.R.R. Tolkien', 310);
addBook('Harry Potter and the Philosophers Stone', 'J.K. Rowling', 223);
addBook('1984', 'George Orwell', 328);

library.forEach(book => book.displayInfo());

console.log('Books by J.K. Rowling:');
console.log(searchByAuthor('Rowling'));

console.log('Books with 100 pages or more:');
console.log(filterByPages());

console.log('Modified titles and authors:');
console.log(modifyTitlesAndAuthors());
