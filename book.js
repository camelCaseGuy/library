const library = [];

function Book() {
  // constructor
}

const addBook = (book) => {
  library.push(book);
}

function printBooks() {
  library.forEach(book => {
    console.log(book);
  });
}

addBook('Alice in Wonderland');
addBook('Treasure Island');
addBook('Robinson Crusoe');

printBooks();
