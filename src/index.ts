import express from 'express'
import chalk from 'chalk'
import { foo } from './test'

foo()

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
  console.log(chalk.red('is this thing really on'))
  console.log(`http://localhost:${PORT}`)
})
