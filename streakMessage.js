const random = array => array[Math.floor(Math.random()*array.length)]

const countMessage = count => random([
  `You’ve completed <strong>*${count}*</strong> check-ins in a row.`,
  `You’ve completed <strong>*${count}*</strong> consecutive check-ins.`,
  `You’ve checked-in <strong>*${count}*</strong> times in a row.`
  ])

module.exports = count => {
  switch(true) {
    case (count < 2):
      return '<p>Hi!</p>'
    case (count < 3):
      return `<p>${countMessage(count)} Nice!</p>`
    case (count < 4):
      return `<p>${countMessage(count)} 📈</p>`
    case (count < 5):
      return `<p>${countMessage(count)} Getting it up there!</p>`
    case (count < 8):
      return random([
        `<p>${countMessage(count)} Amazing!</p>`,
        `<p>${countMessage(count)} Fantastic!</p>`,
        `<p>${countMessage(count)} 🚀</p>`,
        ])
    default:
      return random([
        `<p>${countMessage(count)} What the hack 0.0</p>`,
        `<p>${countMessage(count)} Yeouch!!!!</p>`,
        `<p>${countMessage(count)} Check that out! That’s amazing</p>`,
        `<p>${countMessage(count)} You’re a <strong>check-in god</strong></p>`,
        `<p>${countMessage(count)} ${'🐓'.repeat(count)}</p>`
        ])
  }
}
