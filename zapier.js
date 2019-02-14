const axios = require('axios')
const secrets = require('./secrets')

const sendCheckInTo = (club) => {
  axios.post(secrets['ZAPIER_WEBHOOK_URL'], club)
}
module.exports = sendCheckInTo
