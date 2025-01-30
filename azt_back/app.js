const express = require('express')
const volleyball = require('volleyball')
const carRouter = require('./routers/carRouter')
const userRouter = require('./routers/userRouter')
const dbconn = require('./db/dbconn')

const app = express()

app.use(express.json())
app.use(volleyball)

app.use('/cars', carRouter)
app.use('/users', userRouter)

const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})
