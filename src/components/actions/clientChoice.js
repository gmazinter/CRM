import React, {Component} from 'react';

class ClientChoice extends Component {
    
    updateVal = (event) => {
        // console.log(event.target.value)
        this.props.updateVal(event.target.name, event.target.value, "client")
    }

    render() {
        return (
            <div id="client-div">
                Client: 
                <input name="name" onChange={this.updateVal} value={this.props.name} list="clients" />
                <datalist id="clients">
                    {this.props.clients.map(c => <option key={c._id} value={c.name}></option>)}
                </datalist>
            </div>
        )
    }
}

export default ClientChoice