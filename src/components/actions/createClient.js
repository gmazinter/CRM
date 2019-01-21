import React, {Component} from 'react'
import '../../styles/createClient.css'

class Create extends Component {

    updateVal = (event) => {
        this.props.updateVal(event.target.name, event.target.value, "newClient")
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
                <input name="name" id="name-inpt" placeholder="name" value={this.props.newClient.name} onChange={this.updateVal} />
                <input name="surname" id="surname-inpt" placeholder="surname" value={this.props.newClient.surname} onChange={this.updateVal} />
                <input name="country" id="country-inpt" placeholder="country" value={this.props.newClient.country} onChange={this.updateVal} />
                <input name="owner" id="owner-inpt" placeholder="owner" value={this.props.newClient.owner} onChange={this.updateVal} />
                <button id="create-btn" onClick={this.createClient}>CREATE</button>
            </div>
        )
    }
}

export default Create