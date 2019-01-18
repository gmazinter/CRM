const mongoose = require('mongoose')
const Client = require('./server/models/client')
mongoose.connect('mongodb://localhost:27017/CRM_DB', {useNewUrlParser: true})
const data = require('./src/data.json')

let tempClient
data.forEach(c => {
    tempClient = new Client ({
        name: c.name,
        surname: c.surname,
        country: c.country,
        firstContact: c.firstContact,
        email: c.email,
        emailType: c.emailType,
        sold: c.sold,
        owner: c.owner
    })
    tempClient.save()
})