const express = require('express');
const path = require('path');
const pug = require('pug');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

/*
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
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
*/

app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'public', 'views', 'index.pug'))
});

app.get('/aboutme', (req, res) => {
  res.render(path.join(__dirname, 'public', 'views', 'aboutme.pug'))
});

app.get('/software', (req, res) => {
  res.render(path.join(__dirname, 'public', 'views', 'software.pug'))
});

app.get('/media', (req, res) => {
  res.render(path.join(__dirname, 'public', 'views', 'media.pug'))
});

app.get('/projects', (req, res) => {
  res.render(path.join(__dirname, 'public', 'views', 'projects.pug'))
});

app.get('/resources', (req, res) => {
  res.render(path.join(__dirname, 'public', 'views', 'resources.pug'))
});


app.listen(PORT, () => {
  console.log(`Server listening on Port:${PORT}`)
});