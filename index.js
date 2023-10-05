const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3009;

// Middleware to parse JSON requests
app.use(bodyParser.json());

const users = [];

// GET endpoint to retrieve all users
app.get('/users', (req, res) => {
  res.sendFile("./Html/index.html", {root : __dirname});
});
// GET endpoint to retrieve one user by ID
app.get('/users/:id', (req, res) => {
 const UserID = parseInt(req.params.id,10);
 res.json(users[UserID])
});

// POST endpoint to create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});


// PUT endpoint to modify a user
app.put('/users/:id', (req, res) =>{
 const id = parseInt(req.params.id,10);
 users[id] = req.body;
 res.status(201).json(users[id]);
 });


 // DELETE endpoint to delete an existing user
 app.delete('/users/:id',(req ,res)=>{
  const id = parseInt(req.params.id,10);
  let DelUser = users.splice(id,1);
  res.status(201).json(users);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log("HERE...")