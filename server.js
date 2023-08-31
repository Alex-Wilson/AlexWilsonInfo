
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.html')
})

app.get('/aboutme', (req, res) => {
  res.render('aboutme.html')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


/**
 * 
 * 
Monster
Hunter X Hunter
Demon Slayer
Parasite

*///
