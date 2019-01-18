import React, {Component} from 'react';

class ClientChoice extends Component {
    render() {
        return (
            <div id="client-div">
                Client: 
                <input list="clients" /> 
                <datalist id="clients">
                    {/* {this.props.options.map(o => )} */}
                </datalist>
            </div>
        )
    }
}

export default ClientChoice