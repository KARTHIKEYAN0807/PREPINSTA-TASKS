const books = [];

document.getElementById('addBookForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const pages = document.getElementById('pages').value.trim();
  const genre = document.getElementById('genre').value.trim();
  const errorMessage = document.getElementById('errorMessage');

  if (!title || !author || !pages || !genre) {
    errorMessage.textContent = 'All fields are required.';
  } else {
    errorMessage.textContent = '';
    const book = { title, author, pages, genre };
    books.push(book);
    displayBooks(books);
    this.reset();
  }
});

document.getElementById('searchInput').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
  displayBooks(filteredBooks);
});

function displayBooks(bookList) {
  const bookListContainer = document.getElementById('bookList');
  const noResultsMessage = document.getElementById('noResultsMessage');
  
  bookListContainer.innerHTML = '';
  if (bookList.length === 0) {
    noResultsMessage.style.display = 'block';
  } else {
    noResultsMessage.style.display = 'none';
    bookList.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.className = 'book-item';
      bookItem.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Genre: ${book.genre}</p>
      `;
      bookListContainer.appendChild(bookItem);
    });
  }
}
