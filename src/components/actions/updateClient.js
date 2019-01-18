import React, {Component} from 'react';
import ClientChoice from './clientChoice'
import '../../styles/updateClient.css'

class Update extends Component {
    render() {
        return (
            <div id="update-container">
                <div id="update-div">UPDATE</div>
                <ClientChoice />
                <div id="transfer-div">Transfer ownership to</div>
                <select id="owner-select" />
                <button id="trans-btn">TRANSFER</button>
                <div id="send-div">Send e-mail:</div>
                <select id="email-select" />
                <button id="send-btn">SEND</button>
                <div id="declare-div">Declare sale!</div>
                <button id="declare-btn">DECLARE</button>
            </div>
        )
    }
}

export default Update