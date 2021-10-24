import express from 'express'

const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.json({
    success: true,
    message: 'hello world!'
  })
})

app.listen(port, () => console.log(`Server running on localhost:${port}`))
