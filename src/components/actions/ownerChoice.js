import React, {Component} from 'react';

class OwnerChoice extends Component {

    executeUpdate = () => {
        this.props.executeUpdate("owner")
    }

    updateVal = (event) => {
        this.props.updateVal(event.target.name, event.target.value, "client")
    }

    render() {
        return (
            <div id="owner-select">
                Transfer ownership to: 
                <select name="owner" value={this.props.owner} onChange={this.updateVal}>
                    {this.props.owners.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                <button id="trans-btn" onClick={this.executeUpdate}>TRANSFER</button>
            </div>
        )
    }
}

export default OwnerChoice