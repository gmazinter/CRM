import React, {Component} from 'react';
import ClientChoice from './clientChoice'
import OwnerChoice from './ownerChoice'
import EmailChoice from './emailChoice'
import '../../styles/updateClient.css'

class Update extends Component {

    transferOwnership = () => {
        this.props.transferOwnership()
    }

    render() {
        return (
            <div id="update-container">
                <div id="update-div">UPDATE</div>
                <ClientChoice clients={this.props.clients} />
                <div id="transfer-div">Transfer ownership to</div>
                <OwnerChoice owners={this.props.owners} />
                <button id="trans-btn" onClick={this.transferOwnership}>TRANSFER</button>
                <div id="send-div">Send e-mail:</div>
                <EmailChoice />
                <button id="send-btn">SEND</button>
                <div id="declare-div">Declare sale!</div>
                <button id="declare-btn">DECLARE</button>
            </div>
        )
    }
}

export default Update