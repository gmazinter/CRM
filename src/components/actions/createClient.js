import React, {Component} from 'react'
import '../../styles/createClient.css'

class Create extends Component {

    changeInput = (event) => {
        this.props.changeInput(event.target.name, event.target.value)
    }

    createClient = () => {
        this.props.createClient()
    }

    render() {
        return (
            <div id="create-container">
                <div id="create-div">CREATE</div>
                <div id="name-div">Name:</div>
                <div id="surname-div">Surname:</div>
                <div id="country-div">Country:</div>
                <div id="owner-div">Owner:</div>
                <input name="name" id="name-inpt" placeholder="name" value={this.props.client.name} onChange={this.changeInput} />
                <input name="surname" id="surname-inpt" placeholder="surname" value={this.props.client.surname} onChange={this.changeInput} />
                <input name="country" id="country-inpt" placeholder="country" value={this.props.client.country} onChange={this.changeInput} />
                <input name="owner" id="owner-inpt" placeholder="owner" value={this.props.client.owner} onChange={this.changeInput} />
                <button id="create-btn" onClick={this.createClient}>CREATE</button>
            </div>
        )
    }
}

export default Create