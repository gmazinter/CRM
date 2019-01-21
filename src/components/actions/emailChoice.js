import React, {Component} from 'react';

class EmailChoice extends Component {

    updateVal = (event) => {
        this.props.updateVal(event.target.name, event.target.value, "client")
    }

    executeUpdate = () => {
        this.props.executeUpdate("emailType")
    }

    render() {
        return (
            <div>
                Send E-Mail: 
                <select name="emailType" value={this.props.emailType} onChange={this.updateVal} id="email-select">
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                </select>
                <button id="send-btn" onClick={this.executeUpdate}>SEND</button>
            </div>
        )
    }
}

export default EmailChoice