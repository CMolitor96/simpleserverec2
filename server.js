const express = require('express')
const app = express()
const port = 3000

app.get('/goose', (req, res) => {
  res.send(`My server is hosted 😎`)
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})