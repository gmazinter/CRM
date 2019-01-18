import React, {Component} from 'react';

class ClientChoice extends Component {
    render() {
        return (
            <div id="client-div">
                Client: 
                <input list="clients" />
                <datalist id="clients">
                    {this.props.clients.map(c => <option key={c._id} value={c.name}>{c.name}</option>)}
                </datalist>
            </div>
        )
    }
}

export default ClientChoice