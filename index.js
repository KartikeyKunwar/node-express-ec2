import express from 'express'

const app = express()

app.listen(3002, () => console.log('API running on port 3002'))

app.get('/', (req, res) => res.json('My API runnning.'))