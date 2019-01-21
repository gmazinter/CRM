import React, {Component} from 'react';
import Update from './actions/updateClient';
import Create from './actions/createClient';
import axios from 'axios';

class Actions extends Component {
    constructor() {
        super() 
        this.state = {
            client: {
                name: '',
                emailType: '',
                sold: false,
                owner: ''
            },
            newClient: {
                name: '',
                surname: '',
                country: '',
                owner:''
            },
            clients: [],
            owners: []
            }
        }
        
    componentDidMount() {
        // this.getData()
        let data = require('../data.json')
        this.setState({clients: data}, function () {
            this.createOwnerList(this.state.clients)
        })
    }

    getData = () => {
        axios.get('http://localhost:8000/clients-actions')
            .then((clients) => {this.setState({clients: clients.data}, () => {
                this.createOwnerList(this.state.clients)
            })})       
    }

    createOwnerList = (clients) => {
        let tempObj = {}
        clients.forEach(c => {
            if (!tempObj[c.owner]) {
                tempObj[c.owner] = true
            }
        })
        // console.log(tempObj) 
        this.setState({owners: Object.keys(tempObj)})
    }

    updateVal = (name, value, keyToUpdate) => {
        const tempClient = {...this.state[keyToUpdate]}
        tempClient[name] = value
        this.setState({
            [keyToUpdate]: tempClient
        }, function() {
            console.log(this.state[keyToUpdate])
        })
    }

    executeUpdate = (property) => {
        let temp = this.state.clients.find(c => c.name === this.state.client.name)
        if (temp) {
            let toSend = {
                _id :temp._id,
                [property]: this.state.client[property] 
            }
            console.log(toSend)
        } else {
            console.log('the client does not exist')
        }
    }

    createClient = () => {
        const name = this.state.newClient.name + ' ' + this.state.newClient.surname
        const toCreate = {
            name: name,
            country: this.state.newClient.country,
            owner: this.state.newClient.owner,
            firstContact: new Date(),
            email: null,
            emailType: null,
            sold: false
        }
        // axios.post(`http://localhost:8000/clients`, toCreate)
        console.log(toCreate)
    }

    render() {
        return (
            <div>
                <Update clients={this.state.clients} owners={this.state.owners}
                updateVal={this.updateVal}
                executeUpdate={this.executeUpdate} name={this.state.client.name}
                emailType={this.state.client.emailType} owner={this.state.client.owner} />
                <br />
                <Create newClient={this.state.newClient} updateVal={this.updateVal} createClient={this.createClient} />
            </div>
        )
    }
}

export default Actions;