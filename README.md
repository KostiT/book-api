#📚 Book API (Express.js)

A simple RESTful API built with Express.js
.
This API allows you to manage a collection of books with basic CRUD operations.

##🚀 Features

Get all books

Get a book by ID

Add a new book

Update an existing book

Delete a book

##🛠️ Tech Stack

Node.js – JavaScript runtime

Express.js – Web framework for building APIs

Postman / cURL – For testing endpoints

##📂 Project Setup

Clone the repo:

git clone https://github.com/your-username/book-api.git
cd book-api

Install dependencies:

npm install

Start the server:

node server.js

The API will run at:

http://localhost:3000

##📖 API Endpoints
🔹 Get all books
GET /books

🔹 Get a book by ID
GET /books/:id

🔹 Add a new book
POST /books

Body (JSON):

{
"title": "Dune",
"author": "Frank Herbert"
}

🔹 Update a book
PUT /books/:id

Body (JSON):

{
"title": "Updated Title",
"author": "Updated Author"
}

🔹 Delete a book
DELETE /books/:id

##🧪 Testing with Postman

Open Postman and create a new request.

Use the endpoints above to test the API.

For POST/PUT, set body type to raw JSON.

Example:

{
"title": "The Hobbit",
"author": "J.R.R. Tolkien"
}

##📌 Notes

This project uses an in-memory database (array). Data will reset when the server restarts.

You can extend it by connecting to a real database like MongoDB or MySQL.
