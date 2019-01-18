import React, {Component} from 'react';

class Client extends Component {
    openEditor = () => {
        this.props.openEditor(this.props.client)
    }

    render() {
        return (
            <div className="client-row" onClick={this.openEditor}>
                <div className="client-item">{this.props.client.name.split(' ')[0]}</div>
                <div className="client-item">{this.props.client.name.split(' ')[1]}</div>
                <div className="client-item">{this.props.client.country}</div>
                <div className="client-item">{this.props.client.firstContact}</div>
                <div className="client-item">{this.props.client.emailType || '-'}</div>
                <div className="client-item">{this.props.client.sold ? 'V' : 'X'}</div>
                <div className="client-item">{this.props.client.owner}</div>
            </div>
        )
    }
}

export default Client