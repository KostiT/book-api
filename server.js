// Import Express
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory "database"
let books = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
];

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// GET a book by ID
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// POST - Add a new book
app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT - Update a book
app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });

  const { title, author } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;

  res.json(book);
});

// DELETE - Remove a book
app.delete("/books/:id", (req, res) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (bookIndex === -1)
    return res.status(404).json({ message: "Book not found" });

  const deletedBook = books.splice(bookIndex, 1);
  res.json(deletedBook);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
