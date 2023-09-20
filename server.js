const express = require('express');
const app = express();

const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/aboutme', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views','aboutme.html'));
});

app.get('/software', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views','software.html'));
});

app.get('/games', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views','games.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});