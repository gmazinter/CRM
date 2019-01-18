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
                surname: '',
                country: '',
                firstContact: '',
                email: '',
                emailType: '',
                sold: false,
                owner: ''
            }
        }
    }

    changeInput = (name, value) => {
        const tempClient = {...this.state.client}
        tempClient[name] = value
        this.setState({client: tempClient}, function() {
            console.log(this.state.client)
        })
    }

    createClient = () => {
        const toSend = {
            name: this.state.client.name,
            surname: this.state.client.surname,
            country: this.state.client.country,
            owner: this.state.client.owner,
            firstContact: null,
            email: null,
            emailType: null,
            sold: null
        }
        axios.post(`http://localhost:8000/clients`, toSend)
    }

    render() {
        return (
            <div>
                <Update />
                <br />
                <Create client={this.state.client} changeInput={this.changeInput} createClient={this.createClient} />
            </div>
        )
    }
}

export default Actions