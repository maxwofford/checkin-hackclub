const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  require('./airtable.js')()
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Started up and listening on port ${port}!`))
