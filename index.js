const library = [];

function Book() {
  // constructor
}

const addBook = (book) => {
  library.push(book);
}

function printBooks() {
  const containerDiv = document.getElementById('container');

  library.forEach(book => {
    const elemDiv = document.createElement('div');
    elemDiv.innerHTML = book;
    elemDiv.classList.add('card')
    containerDiv.appendChild(elemDiv)
  });
}

addBook('Alice in Wonderland');
addBook('Treasure Island');
addBook('Robinson Crusoe');
addBook('Huckleberry Finn');
addBook('Little Women');
addBook('The Invisible Man');
addBook('20,000 Leagues Under the Sea');
addBook('Tom Sawyer');
addBook('The Mysterious Island');
addBook('Ben Hur');
addBook('Ivanhoe');
addBook('The Time Machine');

printBooks();
