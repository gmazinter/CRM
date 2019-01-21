const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Client = require('./server/models/client')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/CRM_DB', {useNewUrlParser: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
  })

//ACTIONS COMPONENT ROUTES:
app.get(`/clients-actions`, function(req, res) {
    Client.find({}, 'id name owner', function(err, data) {
        res.send(data)
    })
})

app.put(`/updateclient/:_id`, function(req, res) {
    const temp = req.body
    Client.findByIdAndUpdate(req.params._id, temp, {new: true}, function(err, data){res.send(data)})
})

//CLIENTS COMPONENT ROUTES:
app.get('/clients', function(req, res) {
    Client.find({}, function(err, data) {
        res.send(data)
    })
})

app.post('/clients', function(req, res) {
    let c = req.body
    let fullName = `${c.name} ${c.surname}`
    let tempClient = new Client ({
        name:  fullName,
        country: c.country,
        firstContact: c.firstContact,
        email: c.email,
        emailType: c.emailType,
        sold: c.sold,
        owner: c.owner
    })
    tempClient.save()
    res.end()
})

// app.get('/clients/:clientID', function(req, res) {
//     let cID = req.params.clientID
//     Client.findById(cID, function(err, client) {
//         console.log('OK')
//         console.log(cID)
//         res.send(client)
//     })
// })

app.put('/clients/:clientID', function(req, res) {
    let cID = req.params.clientID
    Client.findByIdAndUpdate(cID, req.body, {new: true}, function(err, client) {
        res.end()
    })
})


app.listen(8000, function() {
    console.log('server running on port 8000')
})