const config = {
  'AIRTABLE_API_KEY': process.env['AIRTABLE_API_KEY']
}
const env = process.env.NODE_ENV || 'development'

if (env == 'development') {
  config['AIRTABLE_API_KEY'] = require('./env.json')['AIRTABLE_API_KEY']
}

module.exports = config
