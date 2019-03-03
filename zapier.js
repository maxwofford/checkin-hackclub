const axios = require('axios')
const secrets = require('./secrets')

const sendCheckInTo = club => {
	axios
		.post(secrets['ZAPIER_WEBHOOK_URL'], club)
		.then(res => {
			console.log(`Successful check-in posted for ${club.name}`)
		})
		.catch(err => {
			console.log(`Error while posting check-in for ${club.name}...`)
			console.log(err)
		})
}
module.exports = sendCheckInTo
