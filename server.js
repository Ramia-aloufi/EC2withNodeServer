// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

let posts = [
    {
      "id": 1,
      "title": "Introduction to Node.js",
      "content": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      "author": "John Doe",
      "date": "2023-12-09"
    },
    {
      "id": 2,
      "title": "Getting Started with React",
      "content": "React is a JavaScript library for building user interfaces.",
      "author": "Jane Smith",
      "date": "2023-12-10"
    },
    {
      "id": 3,
      "title": "RESTful API Design Best Practices",
      "content": "Designing RESTful APIs with best practices in mind.",
      "author": "Bob Johnson",
      "date": "2023-12-11"
    },
    {
      "id": 4,
      "title": "MongoDB Basics",
      "content": "An introduction to MongoDB, a NoSQL database.",
      "author": "Alice Williams",
      "date": "2023-12-12"
    }
  ]
  

// Define a route for the root path
app.get('/', (req, res) => {
  // Send a response to the client
  res.send(posts);
});

app.get('/:id', (req, res) => {
    
    res.send(posts.filter((post)=> post.id == req.params.id));
  });

// Set the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
