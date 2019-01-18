import React, {Component} from 'react';

class OwnerChoice extends Component {

    render() {
        return (
            <div id="owner-select">
                Client: 
                    <select>
                        {this.props.owners.map(o => <option key={o} value={o} >{o}</option>)}
                    </select>
            </div>
        )
    }
}

export default OwnerChoice