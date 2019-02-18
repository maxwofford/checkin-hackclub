const sendCheckInTo = require('./zapier')
const Airtable = require('airtable')
const secrets = require('./secrets')
const base = new Airtable({apiKey: secrets['AIRTABLE_API_KEY']}).base('apptEEFG5HTfGQE7h')

module.exports = () => {
  const today = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ][new Date().getDay()]

  base('Clubs').select({
    filterByFormula: `{Check-in day} = "${today}"`
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(record => {
      const club = {
        name: record.get('Name'),
        email: record.get('Contact Email')[0],
        streak: (record.get('History') || []).length
      }
      sendCheckInTo(club)
    })

    fetchNextPage()
  }, function done(err) {
    if (err) { console.error(err); return }
  })
}

