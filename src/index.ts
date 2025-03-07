import type { Request, Response } from 'express'
import express from 'express'

const app = express()

const port = process.env.PORT

app.get('/', (res: Response) => {
  res.json({ message: 'Welcome to the Express + TypeScript Server!' })
})

app.listen(port, () => {
  console.log('Server started')
})
