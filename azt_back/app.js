const express = require('express')

const app = express()

app.use(express.json())

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Welcome to project!')
})

app.use('/', router)

const PORT = process.env.PORT || 7000

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
