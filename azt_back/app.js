const express = require('express')
const volleyball = require('volleyball')
const dbconn = require('./db/dbconn')

const app = express()

app.use(express.json())
app.use(volleyball)

app.get('/', (req, res) => {
  res.send('Welcome to project!')
})

const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
