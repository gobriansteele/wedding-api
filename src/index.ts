import express from 'express'
const app = express()

const PORT = '3000'

app.get('/', (req, res) => {
  console.log(req)
  res.json({
    brian: 'is cool',
  })
})
app.get('/guest/:id', (req, res) => {
  console.log(req.path)
  res.json({
    brian: 'is not cool',
  })
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
