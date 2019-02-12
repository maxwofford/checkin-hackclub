module.exports = () => {
  const Airtable = require('airtable')
  const secrets = require('./secrets')
  const base = new Airtable({apiKey: secrets['AIRTABLE_API_KEY']}).base('apptEEFG5HTfGQE7h')

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
      console.log(`Retrieved ${record.get('Name')}`)
    })

    fetchNextPage()
  }, function done(err) {
    if (err) { console.error(err); return }
  })
}

