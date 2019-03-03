const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const triggerCheckIn = require('./airtable')
const secrets = require('./secrets')

app.get('/', (req, res) => {
	if (req.query.password == secrets['PASSWORD']) {
		triggerCheckIn()
		res.send('Success!')
	} else {
		res.send(
			"<a href='https://www.youtube.com/watch?v=RfiQYRn7fBg'>Ah ah ah, you didn't say the magic word</a>"
		)
	}
})

app.listen(port, () => console.log(`Started up and listening on port ${port}!`))
