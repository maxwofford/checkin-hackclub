var config = {}
const configKeys = ['AIRTABLE_API_KEY', 'ZAPIER_WEBHOOK_URL', 'PASSWORD']

configKeys.forEach(key => (config[key] = process.env[key]))

const env = process.env.NODE_ENV || 'development'
if (env == 'development') {
	config = Object.assign(config, require('./env.json'))
}

module.exports = config
