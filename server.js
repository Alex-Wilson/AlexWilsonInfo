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

app.get('/media', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views','media.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views','projects.html'));
});

app.get('/resources', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views','resources.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening on Port:${PORT}`)
});