const sendCheckInTo = require('./zapier')
const Airtable = require('airtable')
const secrets = require('./secrets')
const base = new Airtable({ apiKey: secrets['AIRTABLE_API_KEY'] }).base(
  'apptEEFG5HTfGQE7h'
)

module.exports = () => {
  const today = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][new Date().getDay()]

  const fetchClubs = base('Clubs')
    .select({
      filterByFormula: `{Check-in day} = "${today}"`,
    })
    .all()

  const fetchEventsFrom = clubName =>
    base('History')
      .select({
        filterByFormula: `AND(
        FIND('${clubName}', {Club}),
        OR(
          FIND('Meeting', {Type}) != 0,
          FIND('Check-in', {Type}) != 0
        )
      )`,
      })
      .all()

  fetchClubs.then(clubs => {
    clubs.forEach(clubRecord => {
      const club = {}
      club.name = clubRecord.get('Name')
      club.email = clubRecord.get('Contact Email')[0]

      fetchEventsFrom(club.name).then(events => {
        club.streak = events.length
        sendCheckInTo(club)
      })
    })
  })
}
